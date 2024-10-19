// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
      ],
      link: [
        {
          rel: "icon", type: "image/x-icon", href: "/favicon.ico"
        }
      ],
      title: "Adityakurnias.",
    }
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    "@nuxt/scripts",
  ]
})