'use strict'
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let devMode = process.env.NODE_ENV !== 'production';

module.exports = function() {
  const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
    {
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'style_[hash].css'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve('src/assets'),
      to: path.resolve('dist/assets'),
      toType: 'dir'
    }])
  ];

  const optimization = {
    minimizer: []
  };

  // 根据不同的发布环境，进行不同的配置
  if (devMode) {

  }else {
    plugins.push(new CleanWebpackPlugin(['dist']));
    optimization.minimizer.push(new UglifyJsPlugin({
      // js文件末尾可能有版本号
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/
    }));
  }

  return {
    mode: devMode ? 'development' : 'production',
    entry: {
      app: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle_[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            // 'postcss-loader'
            'sass-loader'
          ]
        }
      ]
    },
    // webpack-dev-server
    devServer: {
      contentBase: './dist',
      port: 9988
    },
    plugins: plugins,
    optimization: optimization,
    devtool: devMode ? 'source-map' : undefined
  }
}
