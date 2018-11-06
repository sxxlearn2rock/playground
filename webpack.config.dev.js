'use strict'

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'devlopment',
  entry: [
    './src/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}