// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],
  css: ["/assets/css/main.css"],
  colorMode: {
    preference: "dark",
    classSuffix: ''
  }
});
colors: {
  primary: "#fff"
}