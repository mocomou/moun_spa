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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/date-fns',
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }]
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
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],
  axios: {
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://moun.info'
    baseURL: 'https://moun.info'
  },
  auth: {
    redirect: {
      login: '/', // redirect user when not connected
      callback: '/callback'
    },
    strategies: {
      auth0: {
        domain: 'dev-wej6jvko.us.auth0.com',
        clientId: 'OrqdNDkuQvDyGIGe3jHDiZselOh4wtXS',
        audience: 'https://dev-wej6jvko.us.auth0.com/api/v2/',
        logoutRedirectUri: 'http://localhost:3000',
        scope: ['openid', 'profile'],
        response_type: 'id_token token',
        token_key: 'id_token'
      },
      github: {
        clientId: 'f4be5d6c5a74912e8e1b',
        clientSecret: '3b033af77017004edb1cd33c6bcc045012e96c95'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
