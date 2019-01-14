/**
 * Provide basic environment specific configuration for webpack build steps
 *
 * Environment information is injected by Webpack. See webpack.DefinePlugin
 * configuration from config files to learn more.
 *
 * This could copied and used as an Ansible template
 */

var config = {
  development: {
    apiBaseUrl: 'http://localhost:8888/'
  },
  production: {
    apiBaseUrl: '/'
  }
};

var env;

try {
  env = process.env.NODE_ENV || 'development';
} catch(e) {
  env = 'development';
}

module.exports = config[env];
