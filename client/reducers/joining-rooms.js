import * as actions from '../actions';

/*
  joiningRooms: HashMap('roomID', bool)
*/

export default (state = {}, action) => {
  switch (action.type) {
    case actions.JOINING_ROOM: {
      return {
        ...state,
        [action.roomID]: true,
      };
    }
    case actions.CONFIRM_JOIN_ROOM: {
      const newState = Object.assign(state);
      delete newState[action.room.roomID];
      return newState;
    }
    case actions.REJECT_JOIN_ROOM: {
      const newState = Object.assign(state);
      delete newState[action.roomID];
      return newState;
    }
    default: return state;
  }
};

