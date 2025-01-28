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
  components: {
    global: true,
    dirs: ['~/components/sections', '~/components/molecules', '~/components/atoms'],
  },

  runtimeConfig: {
    public: {
      FB_API_KEY: process.env.FB_API_KEY,
      FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
      FB_PROJECT_ID: process.env.FB_PROJECT_ID,
      FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
      FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
      FB_APP_ID: process.env.FB_APP_ID,
    },
  },

  compatibilityDate: '2025-01-27',
});
