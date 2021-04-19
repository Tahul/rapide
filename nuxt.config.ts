export default {
  /**
   * Docs: https://fr.nuxtjs.org/docs/2.x/configuration-glossary/configuration-target
   */
  target: 'static',

  /**
   * Docs: https://fr.nuxtjs.org/docs/2.x/configuration-glossary/configuration-head
   */
  head: {
    // App default title
    title: 'Rapide 🏎',
    // Page meta tags
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap'
      }
    ]
  },

  /**
   * Docs: https://github.com/nuxt/components
   */
  components: true,

  /**
   * Docs: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: [],

  /**
   * Docs: https://fr.nuxtjs.org/docs/2.x/configuration-glossary/configuration-plugins
   */
  plugins: [],

  /**
   * Docs: https://fr.nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules
   */
  modules: [],

  /**
   * Docs: https://fr.nuxtjs.org/docs/2.x/configuration-glossary/configuration-modules#buildmodules
   */
  buildModules: [
    /**
     * Docs: https://vite.nuxtjs.org/
     */
    'nuxt-vite',
    /**
     * Docs: https://typescript.nuxtjs.org/
     */
    '@nuxt/typescript-build',
    /**
     * Docs: https://github.com/windicss/nuxt-windicss-module
     * WindiCSS Docs: https://windicss.org/
     */
    'nuxt-windicss'
    /**
     * Peer modules:
     * - Composition API
     * - Docs: https://composition-api.nuxtjs.org/
     */
  ]
}
