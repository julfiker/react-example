'use strict';

var webpack = require('webpack');

var common = require('./webpack.common.js');

module.exports = Object.assign({}, common.config, {
  entry: {
    app: './app/index',
    vendor: ['history', 'react', 'react-dom', 'react-router']
  },
  output: {
    path: './dist',
    filename: 'app.[hash].js'
  },
  plugins: common.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        // This produces smaller react lib
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js')
  ])
});
