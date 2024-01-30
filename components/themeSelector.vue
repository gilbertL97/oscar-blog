<script setup lang="ts">
const color = useColorMode()
function toogleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
const isDarkMode = ref(color.value === 'dark')
</script>

<template>
  <CheckboxTheme v-model="isDarkMode" class="ml-auto h-full" @change="toogleDark()"/>
</template>
