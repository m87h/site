---
title: 'Wrapping C Libraries With Smart Pointers'
date: 2019-01-31T16:58:47.343Z
tags: ["programming","c++"]
---

In this post, we will look at how smart pointers can be used to implement a RAII interface to C libraries. This is the
basis for my [SDL2 wrapper](https://github.com/kvadevack/sdl2xx). Using this method, we don't have to write wrapper classes.<!-- jump -->

SDL uses the common C design pattern of [opaque types](https://en.wikipedia.org/wiki/Opaque_data_type), in which the
implementation details of a type are hidden through use of [forward declaration](https://en.wikipedia.org/wiki/Forward_declaration).
Consider `SDL_Renderer`, which is declared in `SDL_render.h` like so:

```c
struct SDL_Renderer;
typedef struct SDL_Renderer SDL_Renderer;
```

The actual definition of `struct SDL_Renderer` is omitted from the header files. Alongside the above are a number of
function declarations, most notably the "constructor" and "destructor":

```c
extern DECLSPEC SDL_Renderer * SDLCALL
  SDL_CreateRenderer(SDL_Window * window, int index, Uint32 flags);
extern DECLSPEC void SDLCALL SDL_DestroyRenderer(SDL_Renderer * renderer);
```

This gives C libraries an "OOP feel", as seen here:

```c
SDL_Renderer r = SDL_CreateRenderer(w, -1, SDL_RENDERER_ACCELERATED);
SDL_SetRenderDrawColor(r, 255, 0, 0, 255);
SDL_RenderClear(r);
SDL_SetRenderDrawColor(r, 0, 0, 255, 255);
SDL_Rect rect(0, 0, 100, 50);
SDL_RenderFillRect(r, &rect);
SDL_RenderPresent(r);
```

The example above is incomplete, as the programmer forgot to call `SDL_DestroyRenderer`, resulting in a resource leak.
Thankfully, in C++ land we have language support for dealing with such pitfalls. Enter [smart pointers](https://en.wikipedia.org/wiki/Smart_pointer):

This can be generalized using templates, like so:

```cpp
template<typename Creator, typename Destructor, typename... Arguments>
auto Create(Creator c, Destructor d, Arguments&&... args) {
  auto r = c(::std::forward<Arguments>(args)...);
  if (!r) {
    throw ::std::system_error(
      errno, ::std::generic_category(), SDL_GetError());
  }
  return ::std::unique_ptr<::std::decay_t<decltype(*r)>, decltype(d)>(r, d);
}

using Renderer =
  std::unique_ptr<SDL_Renderer, decltype(&SDL_DestroyRenderer)>;

inline Renderer CreateRenderer(SDL_Window* window, int index, Uint32 flags) {
  return Create(
    SDL_CreateRenderer, SDL_DestroyRenderer, window, index, flags);
}
```

and the above example rewritten like so:

```cpp
auto r = CreateRenderer(w, -1, SDL_RENDERER_ACCELERATED);
SDL_SetRenderDrawColor(r.get(), 255, 0, 0, 255);
SDL_RenderClear(r.get());
SDL_SetRenderDrawColor(r.get(), 0, 0, 255, 255);
SDL_Rect rect(0, 0, 100, 50);
SDL_RenderFillRect(r.get(), &rect);
SDL_RenderPresent(r.get());
```

We no longer have to worry about calling `SDL_DestroyRenderer`, as it is called automatically when `r` goes out of scope.

## A word on unique_ptr

As `unique_ptr` models singular ownership, it does not implement a copy constructor. In other words, it cannot be passed
by value. If you need to model multiple ownership, use the reference counting `shared_ptr` instead. It can easily and
efficiently be constructed from a `std::unique_ptr` like so:

```cpp
auto sharedPtr = make_shared_from(std::move(uniquePtr));
```

The reverse is not possible. It is generally a bad idea to design your API to require a specific pointer implementation,
and specifically `std::unique_ptr` [unless ownership transfer is implied](https://herbsutter.com/2013/06/05/gotw-91-solution-smart-pointer-parameters/).
