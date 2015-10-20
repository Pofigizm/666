import * as actions from '../actions';

/*
  topRooms: [{
    roomID: string,
    name: string,
    users: number,
    rating: number,
  }] || null,
*/

export default (state = null, action)  => {
  switch (action.type) {
    case actions.UPDATE_TOP_ROOMS: return action.rooms;
    default: return state;
  }
};

