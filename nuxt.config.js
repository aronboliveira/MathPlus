export default {
  target: "static",
  head: {
    title: "math-plus-calculator-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  build: {
    loaders: {},
  },
  server: {
    port: 3004,
  },
  css: ["@/assets/styles/gStyle.css"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build"],
  modules: ["bootstrap-vue/nuxt"],
};
