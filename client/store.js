import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { reduxReactRouter } from 'redux-router';

import { writeState } from './storage';
import createHistory from 'history/lib/createBrowserHistory';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (_, action) =>
    action.type !== 'ROOM_INPUT_CHANGE' &&
    action.type !== 'SEARCH_INPUT_CHANGE',
});

let middleware = [thunkMiddleware, promiseMiddleware, writeState];
middleware = NODE_ENV === 'production' ? middleware :
              middleware.concat(loggerMiddleware);

export default compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory })
)(createStore);

