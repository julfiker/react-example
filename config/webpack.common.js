'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  config: {
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss', '.css', '.png', '.jpg']
    },
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel'],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader',
            'css?sourceMap!postcss!sass?sourceMap')
        },
        {
          test: /\.png$/,
          loader: 'url-loader?limit=100000&mimetype=image/png'
        },
        {
          test: /\.jpg$/,
          loader: 'file-loader'
        }
      ]
    },
    postcss: [autoprefixer({browsers: ['> 1%']})]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Example',
      favicon: 'app/images/favicon.ico',
      inject: true,
      template: 'app/index.html',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name].[contentHash].css')
  ]
};
