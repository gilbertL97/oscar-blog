<script setup lang="ts">
import themeSelectorVue from './themeSelector.vue'

const isMenuOpen = ref(false)
const toogleMenu =()=>{
  isMenuOpen.value=!isMenuOpen.value
}
</script>

<template>
  <div>
    <!-- <nav class="h-15 flex " >
      the bnav

    </nav> -->
    <div class="dark:bg-gray-900">
      <div
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 relative flex items-center justify-between"
      >

          <ul class="flex items-center hidden space-x-8 md:flex">
            <div class="flex-grow">
    <!-- Tus otros elementos li van aquí -->
 </div>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide dark:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Product</a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide dark:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 "
              >Features</a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide dark:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 "
              >Pricing</a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide dark:text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >About us</a>
            </li>
            <li>
              <themeSelectorVue class="w-full" />
            </li>
          </ul>
          <div class="md:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              @click="isMenuOpen = true"
            > <div class="i-material-symbols-light-menu "></div>
              <div class="i-material-symbols-light-close-rounded ml-auto"></div>
            </button>
            <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">

              <div class="p-5 bg-white dark:bg-gray-900 border rounded shadow-sm">

                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Product</a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Features</a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Pricing</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>
