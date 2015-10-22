import { combineReducers } from 'redux-immutablejs';

import joinedRooms from './joined-rooms';
import joiningRooms from './joining-rooms';
import topRooms from './top-rooms';
import ui from './ui';

import router from './immutableRouteReducer';

export default combineReducers({
  joinedRooms,
  joiningRooms,
  topRooms,
  ui,
  router,
});

