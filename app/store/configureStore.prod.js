// Libraries for handling App state and routing
import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';

import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

//import api from '../middleware/api'
import rootReducer from '../reducers';

const reduxRouterMiddleware = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, apiMiddleware, reduxRouterMiddleware)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState);
}
