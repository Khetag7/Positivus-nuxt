export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt'
  ],
  
  app: {
    head: {
      title: 'Positivus', 
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },
  
  css: [
    '@/assets/styles/style.scss'
  ],
  
  
  
})
