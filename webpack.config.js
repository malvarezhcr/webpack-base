import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,

  target: "web",

  entry: {
     app: [ path.resolve(__dirname, 'app/index.js') ]
  },

  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '/',
    filename: '[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: true
    }),
    new ExtractTextPlugin('src/assets/stylesheets/app.css', { allChunks: true })
  ],

  module: {
    loaders:  [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader?config=otherSassLoaderConfig"] }
    ]
  }
}

// var path = require('path') ;
// var HtmlWebpackPlugin = require('html-webpack-plugin') ;
// var webpack = require('webpack') ;

// module.exports = {
//   debug: true,
//   devtool: 'inline-source-map',
//   noInfo: false,

//   target: "web",

//   entry: {
//      app: [ path.resolve(__dirname, 'app/index.js') ]
//   },

//   output: {
//     path: path.resolve(__dirname, 'build/js'),
//     publicPath: '/',
//     filename: 'bundle.js'
//   },

//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin()
//   ],

//   module: {
//     loaders:  [
//       { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }
//     ]
//   }
// }


