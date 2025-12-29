// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@primevue/nuxt-module"],
  css: ["/assets/style.css"],
  app: {
    head: {
      title: "Mateusz Hann | Portfolio",
      link: [{ rel: "icon", type: "image/png", href: "/MH.png" }],
    },
  },
});
