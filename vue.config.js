const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
publicPath:'./'
})

// publicPath: process.env.NODE_ENV === 'production'
// ? '/dist/' 發佈網頁，生成
// : '/'