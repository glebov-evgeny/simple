// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  ssr: true,
  debug: true,

  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/tools/_mixins.scss";`,
        },
      },
    },
  },

  image: {
    format: ['webp'],
    presets: {
      cover: {
        modifiers: {
          fit: 'cover',
          format: 'png',
        },
      },
    },
  },

  // https://github.com/cpreston321/nuxt-swiper
  modules: ['nuxt-swiper', '@pinia/nuxt', '@nuxt/image-edge'],

  app: {
    head: {
      title: 'Simple',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { hid: 'keywords', name: 'keywords', content: '' },
        { name: 'theme-color', content: '#fff' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/fairplay/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/fairplay/favicon-16x16.png' },
        { rel: 'icon', sizes: '32x32', href: '/fairplay/favicon-32x32.png', type: 'image/png' },
        { rel: 'apple-touch-icon', href: '/fairplay/apple-touch-icon.png' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components'],

  runtimeConfig: {
    public: {},
  },
});
