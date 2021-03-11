import { defineNuxtConfig } from '@nuxtjs/composition-api'

export default defineNuxtConfig({
  target: 'static',

  head: {
    title: 'rapide',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['nuxt-vite', '@nuxt/typescript-build', 'nuxt-windicss'],

  modules: [],
})
