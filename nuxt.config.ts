// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/png', href: '/asereico.png'}
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  colorMode: {
    classSuffix: '',
  },
  i18n:{
    strategy: 'prefix_except_default',
    defaultLocale: 'es',
      locales: [ 
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'ca', iso: 'es-CA', file: 'ca.json' },
      { code: 'es', iso: 'es-ES', file: 'es.json' }
    ],
      lazy: true,
      // Especifica el directorio donde se encuentran los archivos de traducción
      langDir: 'locales/',
  }
})

