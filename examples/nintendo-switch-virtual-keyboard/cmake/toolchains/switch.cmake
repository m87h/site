set(CMAKE_SYSTEM_NAME "Generic")

set(CMAKE_C_COMPILER "$ENV{DEVKITPRO}/devkitA64/bin/aarch64-none-elf-gcc" CACHE STRING "" FORCE)
set(CMAKE_CXX_COMPILER "$ENV{DEVKITPRO}/devkitA64/bin/aarch64-none-elf-g++" CACHE STRING "" FORCE)
set(CMAKE_AR "$ENV{DEVKITPRO}/devkitA64/bin/aarch64-none-elf-gcc-ar" CACHE STRING "" FORCE)
set(CMAKE_RANLIB "$ENV{DEVKITPRO}/devkitA64/bin/aarch64-none-elf-gcc-ranlib" CACHE STRING "" FORCE)
set(PKG_CONFIG_EXECUTABLE "$ENV{DEVKITPRO}/portlibs/switch/bin/aarch64-none-elf-pkg-config" CACHE STRING "" FORCE)

set(CMAKE_C_FLAGS "-ffunction-sections -fdata-sections -march=armv8-a -mtune=cortex-a57 -mtp=soft -fPIC -ftls-model=local-exec" CACHE STRING "" FORCE)
set(CMAKE_CXX_FLAGS "${CMAKE_C_FLAGS} -fno-rtti -fno-exceptions" CACHE STRING "" FORCE)
set(CMAKE_EXE_LINKER_FLAGS_INIT "-specs=$ENV{DEVKITPRO}/libnx/switch.specs" CACHE STRING "" FORCE)
set(CMAKE_MODULE_LINKER_FLAGS_INIT "${CMAKE_EXE_LINKER_FLAGS_INIT}" CACHE STRING "" FORCE)

set(CMAKE_FIND_ROOT_PATH $ENV{DEVKITPRO}/libnx $ENV{DEVKITPRO}/portlibs/switch)
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_PACKAGE ONLY)

set(BUILD_SHARED_LIBS OFF CACHE INTERNAL "Shared libs not available")
