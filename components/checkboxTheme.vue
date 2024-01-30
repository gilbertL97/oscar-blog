<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
</script>
<template>
  <label
    class="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
  >
   <input
    v-model="model"
      type="checkbox"
      class="peer sr-only"
    />  
    <span
      class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-700 text-gray-400 transition-all peer-checked:start-6 peer-checked:text-gray-200"
    ><div v-if="model" class="i-material-symbols-light-wb-sunny"></div>
    <div v-else class="i-material-symbols-light-nightlight"></div> 
    </span>
    <span
      class="absolute inset-0 rounded-full bg-gray-300 dark:bg-gray-700 transition peer-checked:text-gray-800"
    ></span>
  </label>
</template>
