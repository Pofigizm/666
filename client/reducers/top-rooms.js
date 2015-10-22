import * as actions from '../actions';
import { List } from 'immutable';

/*
  topRooms: [{
    roomID: string,
    name: string,
    users: number,
    rating: number,
  }],
*/

export default (state = List(), action)  => {
  switch (action.type) {
    case actions.UPDATE_TOP_ROOMS:
      return List(action.rooms);
    default:
      return state;
  }
};

