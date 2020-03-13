const path = require('path')
const port = 9090

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: port
    // proxy: {
    //   '/api': {}
    // }
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: '@import "./src/assets/styles/index.scss"'
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('storage', resolve('src/storage'))
      .set('store', resolve('src/store'))
      .set('plugins', resolve('src/plugins'))
  }
}
