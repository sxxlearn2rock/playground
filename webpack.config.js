'use strict'
const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const packagejson = require("./package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let devMode = process.env.NODE_ENV !== 'production';

module.exports = function() {
  const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
    {
      template: './src/user/index.html',
      filename: 'user/index.html',
      inject: true,
      chunks:['user/app', 'vendors']
    }),
    new HtmlWebpackPlugin(
    {
      template: './src/manage/index.html',
      filename: 'manage/index.html',
      inject: true,
      chunks:['manage/app', 'vendors']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css?v=[contenthash]'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve('src/assets'),
      to: path.resolve('dist/assets'),
      toType: 'dir'
    }])
  ];

  // 将第三方库从bundle中抽离出来，单独打包进vendor.bundle
  const optimization = {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          minChunks: 1,
          // 该chunk的名字，用于HtmlWebpackPlugin引入chunk
          name: 'vendors'
        }
      }
    },
    // 将webpack的运行所需文件，从vendor中抽离出来
    // runtimeChunk: "single",
    minimizer: []
  };

  // 根据不同的发布环境，进行不同的配置
  if (devMode) {
    // 开发环境
    // 打包分析
    plugins.push(new BundleAnalyzerPlugin({
      analyzerPort: 9989
    }));
  }else {
    // 生产环境
    plugins.push(new CleanWebpackPlugin(['dist']));
    plugins.push(new ParallelUglifyPlugin({
      // js文件末尾可能有版本号
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/,
      include: /src/,
      // uglifyJS: {
      //   output: {
      //     comments: false,
      //     beautify: false
      //   },
      // }
      uglifyES: {
        
      }
    }));
    // optimization.minimizer.push(new UglifyJsPlugin({
    //   // js文件末尾可能有版本号
    //   test: /\.js(\?.*)?$/i,
    //   exclude: /node_modules/,
    //   // 开启多线程，加速压缩
    //   // parallel: true
    // }));
    optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
  }

  return {
    mode: devMode ? 'development' : 'production',
    entry: {
      'user/app': path.resolve(__dirname, 'src/user/index.js'),
      'manage/app': path.resolve(__dirname, 'src/manage/index.js'),
      // vendor: Object.keys(packagejson.dependencies)//获取生产环境依赖的库
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle_[hash:10].js',
      chunkFilename: "[name].min.js?v=[hash:10]",
    },
    resolve: {
      // 指明第三方模块所在的文件夹
      modules: [path.resolve(__dirname, 'node_modules')]
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          include: path.resolve(__dirname, 'src'),
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
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        },
        {
          test: /\.(sc|c)ss$/,
          use: [
            devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              // 30k以下的图片用url-loader加载
              limit: 1024*30,
              // 否则采用file-loader，它采用与url-loader的options
              fallback: 'file-loader',
              name: 'assets/images/[hash].[ext]'
            }
          }
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
