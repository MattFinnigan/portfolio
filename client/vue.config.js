const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/theme.scss";`,
      }
    }
  },
  transpileDependencies: true,
});
