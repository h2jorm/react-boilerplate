import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {compose} from 'redux-lego';

import todoApp from './todoApp';

let logger = createLogger();
let createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

export const {actions, reducer} = compose(
  todoApp
);

export const store = createStoreWithMiddleware(
  combineReducers(reducer)
);
