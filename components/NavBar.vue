<script setup lang="ts">
const color = useColorMode()
const isMenuOpen = ref(false)
function toogleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const isDarkMode = ref(color.value === 'dark')
function toogleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>
<template>
  <nav class="relative bg-white shadow dark:bg-gray-800">
    <div class="container px-3 py-4 mx-auto">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center justify-between">
          <a href="# " class="dark:bg-gray-800 bg-white">
            <img class="w-auto h-6 sm:h-7 drop-shadow-2xl" src="\images\asere_contorno.webp" alt="">
          </a>
          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu" @click="toogleMenu()">
              <div v-show="!isMenuOpen" class="i-material-symbols-light-menu w-6 h-6" />
              <div v-show="isMenuOpen" class="i-material-symbols-light-close w-6 h-6" />
            </button>
          </div>
        </div>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div :class="[isMenuOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
          <div class="flex items-center mt-4 lg:mt-0 flex-grow ">
            <button type="button" class="flex items-center flex-grow  focus:outline-none" aria-label="toggle profile dropdown">
              <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <div class="i-material-symbols-light-person-rounded w-full h-full dark:text-gray-200 text-gray-600 transition-colors" />
              </div>
              <h3 class="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                Gilbert
              </h3>
            </button>
            <CheckboxTheme v-model="isDarkMode" class="mx-4 justify-center focus:outline-none" @change="toogleDark()" />
            <SelectLang class=""/>
          </div>
          <div class="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 order-first">
            <a href="#About" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">{{ $t("about_me")}}</a>
            <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">{{ $t("my_service")}}</a>
            <a href="#" class="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">{{ $t("contact") }}</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
