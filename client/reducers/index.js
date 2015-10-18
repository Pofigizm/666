import { combineReducers } from 'redux';

import joinedRooms from './joined-rooms';
import joiningRooms from './joining-rooms';
import topRooms from './top-rooms';
import ui from './ui';

import { routerStateReducer } from 'redux-router';

export default combineReducers({
  joinedRooms,
  joiningRooms,
  topRooms,
  ui,
  router: routerStateReducer,
});

