import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { reduxReactRouter } from 'redux-router';

import { writeState } from './storage';
import createHistory from 'history/lib/createBrowserHistory';
// import { fromJS } from 'immutable';

const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
  writeState,
];

let enhancers;
/*
const fromImmutable = next => (reducers, previous) => {
  return next(reducers, previous.toJS());
};

const toImmutable = next => (reducers, previous) => {
  return next(reducers, fromJS(previous));
};
*/
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
    reduxReactRouter({ createHistory }),
    DevTools.instrument(),
    persistState(debugSession)
  );
} else {
  enhancers = compose(
    applyMiddleware(...middlewares),
    reduxReactRouter({ createHistory })
  );
}

export default enhancers(createStore);

