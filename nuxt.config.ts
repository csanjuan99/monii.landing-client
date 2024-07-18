// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL
    }
  },
  modules: ['@nuxt/content', "@nuxthq/studio"],
  routeRules: {
    '/': { prerender: true }
  }
})
