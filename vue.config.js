module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/_common.scss";'
      }
    }
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        maxSize: 1024000
      }
    }
  }
}
