import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store, browserHistory, children } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={ browserHistory }>
            { children }
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
