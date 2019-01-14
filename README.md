Example React project
=====================

Example frontend project using React, build with Webpack and tested with
Jasmine.

In current state this helps to set up basic configuration


Stack
-----

- Routing: [react-router-redux][react-router-redux-git] – allows using
  [Redux][redux-git] state for [React-Router][react-router-git]

- [React][react-site] for view components
- [Webpack][webpack-site] for building assets and running dev server
- [Karma][karma-site] for running tests
- [Jasmine][jasmine-site] for unit testing

[react-router-redux-git]: https://github.com/rackt/react-router-redux
[redux-git]: https://github.com/rackt/redux
[react-router-git]: https://github.com/rackt/react-router/

[react-site]: http://facebook.github.io/react/
[webpack-site]: http://webpack.github.io/
[karma-site]: http://karma-runner.github.io/0.12/index.html
[jasmine-site]: http://jasmine.github.io/2.3/introduction.html


Initial setup
-------------

Install dependencies and start test server

```
git clone ...
npm install
npm start
```

See Runnable tasks section in this file for more information


Configuration
-------------

Development time configuration with hot loader support:
*config/webpack.development.js*

Production configuration with JS minification: *config/webpack.dist.js*

Test configuration: *config/karma.conf.js*


Runnable tasks
--------------

```
npm test                 # Single test run
npm start                # Start test server
npm run build            # Production build under ./dist directory
npm run watch-tests      # Wach files and run test everytime changes occur
```


Usage with CI
-------------

```
npm install
npm test
npm run build
```
