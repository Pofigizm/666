import * as actions from '../../actions';
import insideRoom from './inside-room';
import { Map, List } from 'immutable';

/*
  joinedRooms: HashMap('roomID', {
    userID: string,
    secret: string,
    roomName: string,
    roomUsers: HashMap('userID', {
      avatar: string,
      nick: string,
    }),
    roomMessages: HashMap('messageID', {
      userID: string,
      messageID: string,
      text: string,
      time: number,
      index: number,
      status: 'sent' | 'confirmed' | 'rejected',
    }),
    orderedMessages: ['messageID'],
  });
*/

export default (previous = Map({}), action) => {
  // separate to file
  const state = insideRoom(previous, action);

  switch (action.type) {
    case actions.LEAVE_ROOM:
      return state.remove(action.roomID);
    case actions.CONFIRM_JOIN_ROOM: {
      const { room, identity } = action;
      const { roomID } = room;
      const { userID, secret } = identity;
      const roomName = room.name;
      const roomUsers = room.users
        .reduce(
          (result, {userID: thatUserID, avatar, nick} ) =>
            result.set(thatUserID, Map({
              avatar,
              nick,
            })),
            Map({}));
      const orderedMessages = room.messages
        .reduce((res, {messageID}) => res.push(messageID), List());
      const roomMessages = room.messages
        .reduce(
          (result, {userID: thatUserID, messageID, text, time}, index) =>
            result.set(messageID, Map({
              messageID,
              userID: thatUserID,
              text,
              time,
              status: 'confirmed',
              index,
              attachments: List(),
            })),
            Map({}));

      return state.set(roomID, Map({
        userID,
        secret,
        roomName,
        roomUsers,
        roomMessages,
        orderedMessages,
      }));
    }
    case actions.REJECT_JOIN_ROOM: {
      // TODO: show the error to user instead
      console.log(`Join room rejected: ${action.description}`);
      return state;
    }
    default:
      return state;
  }
};

