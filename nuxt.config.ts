// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  features: {
    noScripts: true,
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-dark",
          },
        },
      },
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/test-utils",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
  ],
});
