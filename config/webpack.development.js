'use strict';

var webpack = require('webpack');

var common = require('./webpack.common.js');

module.exports = Object.assign({}, common.config, {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: common.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
});
