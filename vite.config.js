import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  transpileDependencies: true,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @forward "resources/styles/styles.scss";
          @forward "resources/styles/partials/_colours.scss";
          @forward "resources/styles/partials/_typography.scss";
          @forward "resources/styles/partials/_devices.scss";
          @use "resources/styles/styles.scss";
          @use "resources/styles/partials/_colours.scss";
          @use "resources/styles/partials/_typography.scss";
          @use "resources/styles/partials/_devices.scss";
        `
      }
    }
  },
  plugins: [
    vue(),
    laravel({
      input: ["resources/js/app.js"],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
})