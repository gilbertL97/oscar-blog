<script setup lang="ts">
const model = ref('')
const {locale,setLocale}= useI18n()
const langSelect = computed({
  get: ()=> locale.value,
  set:(value)=>{

    setLocale(value)
  }
})
</script>
<template>
<label  class="block text-sm font-medium text-gray-900 dark:text-white">
<select  v-model="langSelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block  px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
      <option value="es">Esp</option>
      <option value="ca"> Cat</option>
      <option value="en"> Eng</option>
    </select>
</label>
</template>