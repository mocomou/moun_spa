import * as FontAwesome from './build/fontawesome'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'moun.info',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/editor', ssr: false },
    { src: '~/plugins/dompurify', mode: 'client' },
    { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
    '@nuxtjs/vuetify'
  ],

  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },

  styleResources: {
    scss: [
      './assets/style/main.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': 'http://localhost:4000',
    '/rails/': 'http://localhost:4000'
  },
  auth: {
    strategies: {
      auth0: {
        domain: 'dev-wej6jvko.us.auth0.com',
        clientId: process.env.AUTH0_CLIENT_ID ? process.env.AUTH0_CLIENT_ID : 'OrqdNDkuQvDyGIGe3jHDiZselOh4wtXS',
        responseType: 'id_token token',
        token: {
          property: 'id_token',
          type: 'Bearer',
          maxAge: 1800
        }
      },
      github: {
        clientId: 'f4be5d6c5a74912e8e1b',
        clientSecret: '3b033af77017004edb1cd33c6bcc045012e96c95'
      }
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/initial'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
