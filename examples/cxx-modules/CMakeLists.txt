cmake_minimum_required(VERSION 3.2...3.13)
project(cpp_modules VERSION 0.1.0 LANGUAGES CXX)

include(CXXModules.cmake)

add_module_library(math math.cpp)
add_module_executable(cxx_modules main.cpp)
target_link_module_libraries(cxx_modules math)


