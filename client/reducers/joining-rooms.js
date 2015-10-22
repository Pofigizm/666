import * as actions from '../actions';
import { Map } from 'immutable';

/*
  joiningRooms: Map('roomID', bool)
*/

export default (state = Map({}), action) => {
  switch (action.type) {
    case actions.JOINING_ROOM:
      return state.set(action.roomID, true);
    case actions.CONFIRM_JOIN_ROOM:
      return state.remove(action.room.roomID);
    case actions.REJECT_JOIN_ROOM:
      return state.remove(action.roomID);
    default:
      return state;
  }
};

