import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { reduxReactRouter } from 'redux-router';

import { writeState } from './storage';
import createHistory from 'history/lib/createBrowserHistory';

const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
  writeState,
];

const routerStateSelector = state => {
  const plainState = state.toJS().router;
  return Object.keys(plainState).length ? plainState : null;
};

let enhancers;

if (__DEV__) {
  const { persistState } = require('redux-devtools');
  const DevTools = require('./components/DevTools');

  const { href } = window.location;
  const debugSession = href.match(/[?&]debug_session=([^&]+)\b/);

  const logger = require('redux-logger')({
    level: 'info',
    collapsed: true,
    predicate: (_, action) =>
      action.type !== 'ROOM_INPUT_CHANGE' &&
      action.type !== 'SEARCH_INPUT_CHANGE',
  });

  enhancers = compose(
    applyMiddleware(...middlewares, logger),
    reduxReactRouter({ createHistory, routerStateSelector }),
    DevTools.instrument(),
    persistState(debugSession)
  );
} else {
  enhancers = compose(
    applyMiddleware(...middlewares),
    reduxReactRouter({ createHistory, routerStateSelector })
  );
}

export default enhancers(createStore);

