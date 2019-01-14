'use strict';

var common = require('./webpack.common.js');

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine', 'es5-shim'],
    files: [
      'spec/**/*.js'
    ],
    preprocessors: {
      'spec/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: Object.assign({}, common.config, {
      devtool: 'inline-source-map',
      cache: true,
      plugins: common.plugins
    }),
    webpackServer: {
      //contentBase: './app/',
      stats: {
        colors: true
      }
    },
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    captureTimeout: 60000,
    browserNoActivityTimeout: 60000,
    singleRun: false
  });
};
