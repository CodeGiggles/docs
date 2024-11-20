export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],
  
  app: {
    head: {
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'CodeGiggles Docs' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Learn and explore coding paths with CodeGiggles' },
        { hid: 'twitter:image', name: 'twitter:image', content: '/cover.png' },
      ],
    },
  },

  devtools: { enabled: false },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],

  compatibilityDate: '2024-10-22'
})