---
title: C++ Modules
date: '2018-10-28T19:31:43+01:00'
tags: ["programming", "c++"]
---

One of the more exciting proposals for the upcoming C++20 revision is the module system 
([ISO/IEC TS 21544:2018](https://www.iso.org/standard/71051.html)). This proposal aims to solve a number of problems
with C++ - not the least of which is compile times for large code bases. In this post, we will have a brief look at how
modules can be used with current tooling.<!-- jump -->

Consider the following Hello World program:

```cpp
#include <iostream>

int main()
{
  std::cout << "Hello, World!" << std::endl;
  return 0;
}
```

An `#include` directive essentially tells the preprocessor to copy the contents of the referenced header file into the
current translation unit. When taking transitive inclusion into account, you end up with a massively bloated input to
the compile stage:

```
$ cpp -E hello_world.cpp | wc -l
28259
```

Over 28 kLOC for such a simple program! There is no way for us to specify which parts of `<iostream>` we need, and so we
end up with everything. This also highlights another problem with `#include` - everything in the header file becomes
the public interface. Applications might end up depending on details outside of the intended API. Some libraries, like
Boost, end up using a `detail` (or similarly named) namespace for things that applications aren't supposed to rely on,
and make that explicit.

Modules solve this by eliminating `#include` altogether. Let's see how we can use them.

## Trying it out

Modules can currently be enabled using compiler flags:

* Clang and GCC: `-fmodules-ts`
* MSVC: `/experimental:module`

There is as of writing this no support for modules in CMake, so we have to roll our own:

`embed:cxx-modules/CMakeLists.txt`

Next, we define a simple math library that exports a module:

`embed:cxx-modules/math.cpp`

Note how we define a namespace with the same name as our module. This is not in any way required - in fact, modules 
(like headers) are orthogonal to namespaces. This means that a namespace could be implemented across several modules, 
which is useful for things like the standard library.

Let's have a look at how modules are consumed:

`embed:cxx-modules/main.cpp`

