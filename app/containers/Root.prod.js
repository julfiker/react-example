import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends Component {
  render() {
    const { store, browserHistory, children } = this.props;
    return (
      <Provider store={store}>
        <Router history={ browserHistory }>
          { children }
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
