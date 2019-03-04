cmake_minimum_required(VERSION 3.12)
project(virtkbd VERSION 0.1.0 LANGUAGES C)

find_library(LIBNX_LIBRARY libnx.a)
find_path(LIBNX_INCLUDE switch.h)

add_executable(${PROJECT_NAME}.elf main.c)
target_link_libraries(${PROJECT_NAME}.elf ${LIBNX_LIBRARY})
target_include_directories(${PROJECT_NAME}.elf PRIVATE ${LIBNX_INCLUDE})

add_custom_target(${PROJECT_NAME}.nro ALL
	DEPENDS ${PROJECT_NAME}.elf
	COMMAND nacptool --create virtkbd kvadevack ${CMAKE_PROJECT_VERSION} ${PROJECT_NAME}.nacp
	COMMAND elf2nro ${PROJECT_NAME}.elf ${PROJECT_NAME}.nro ${CMAKE_SOURCE_DIR}/icon.jpg --nacp=${PROJECT_NAME}.nacp)

