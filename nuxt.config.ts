export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: ['@nuxt-themes/docus'],

  devtools: { enabled: false },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],

  compatibilityDate: '2024-10-22',

  head: {
    meta: [
      // Meta untuk Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },  // Jenis Twitter Card
      { hid: 'twitter:title', name: 'twitter:title', content: 'CodeGiggles Docs' },  // Judul Twitter Card
      { hid: 'twitter:description', name: 'twitter:description', content: 'Dokumentasi Materi Pemrograman' },  // Deskripsi Twitter Card
      { hid: 'twitter:image', name: 'twitter:image', content: '/cover.png' },  // Gambar untuk Twitter Card
      { hid: 'twitter:site', name: 'twitter:site', content: '@feelemptyz' },  // Handle Twitter situs lo
    ]
  }
})