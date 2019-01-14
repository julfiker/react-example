/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';

// Libraries for handling App state and routing
import { Route, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import Root from './containers/Root';
import App from './containers/App.jsx';
import UserPage from './pages/UserPage.jsx';
import RepoPage from './pages/RepoPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const store = configureStore();

render((
  <Root { ...{store, browserHistory} }>
    <Route path="/" component={App}>
 <Route path="/:login/:name"
           component={RepoPage} />
    <Route path="/:login"
           component={UserPage} />

      <Route path="*" component={NotFoundPage} />
    </Route>
  </Root>
), document.getElementById('app'));
