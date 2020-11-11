/* eslint-disable nuxt/no-cjs-in-config */
require('dotenv').config()
const { meta, icons } = require('./nuxt-attrs')

export default {
  head: {
    title: 'Everything ML - A newsletter about machine learning in production',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...meta,
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;600;700;800;900&display=swap',
      },
      ...icons,
    ],
  },

  loading: {
    color: '#4d545b',
    height: '2px',
  },

  css: ['@/assets/css/main.css'],

  plugins: [{ src: '@/plugins/vue-gtag.js', mode: 'client' }],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
  ],

  modules: ['@nuxtjs/pwa'],

  build: {},
}
