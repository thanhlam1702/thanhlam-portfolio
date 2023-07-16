export default {
  target: 'static',
  ssr: false,
  router: {
    base: '/thanhlam-portfolio/',
  },

  head: {
    title: 'Thanh Lãm | Web Developer',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "My name is Lãm, I'm Front End Web Developer, I can work with VueJs, NuxtJs ReactJs, NextJS, Django, Django Rest Framework, Nodejs. Special, I have passion with creative website",
      },
      { hid: 'robots', name: 'robots', content: 'index,follow' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL,
      },
      { hid: 'og:type', property: 'og:type', content: 'Website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Nguyễn Thanh Lãm | Web Developer',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'My name is Lãm, I"m Front End web developer, I can work with VueJs, NuxtJs ReactJs, NextJS, Django, Django Rest Framework, Nodejs. Special, I have passion with creative website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '',
      },
    ],
    link: [
      { rel: 'canonical', href: process.env.BASE_URL },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  },

  server: {
    port: process.env.NODE_ENV === 'development' ? 1702 : 3000,
  },

  css: ['@/assets/font/font.css', '@/assets/scss/all.scss'],

  plugins: [
    '@/plugins/vue-gtag',
    {
      src: '~/plugins/icon.js',
    },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', 'nuxt-gsap-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv', 'svg-to-vue-component/nuxt'],

  axios: {
    baseURL: process.env.API_URL,
  },

  pwa: {
    manifest: {
      name: 'Thanh Lãm Personal Website',
      short_name: 'Thanh Lãm',
      lang: 'vi',
    },
  },

  gsap: {
    extraPlugins: {
      cssRule: true,
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      slowMo: true,
    },
  },
}
