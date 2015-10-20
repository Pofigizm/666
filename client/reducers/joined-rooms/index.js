import * as actions from '../../actions';
import insideRoom from './inside-room';

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
    })],
    orderedMessages: ['messageID'],
  });
*/

export default (previous = {}, action) => {
  // separate to file
  const state = insideRoom(previous, action);

  switch (action.type) {
    case actions.LEAVE_ROOM: {
      const { roomID } = action;
      const newState = Object.assign({}, state);
      delete newState[roomID];
      return newState;
    }
    case actions.CONFIRM_JOIN_ROOM: {
      const { room, identity } = action;
      const { roomID } = room;
      const { userID, secret } = identity;
      const roomName = room.name;
      const roomUsers = room.users
        .reduce( (result, {userID: key, avatar, nick} ) => {
          return {
            ...result,
            [key]: {
              avatar,
              nick,
            },
          };
        }, {});
      const orderedMessages = room.messages.map(({messageID}) => messageID);
      const roomMessages = room.messages
        .reduce(
          ({result, index}, {userID: thatUserID, messageID, text, time}) =>
            ({
              result: {
                ...result,
                [messageID]: {
                  messageID,
                  userID: thatUserID,
                  text,
                  time,
                  status: 'confirmed',
                  index,
                  attachments: [],
                },
              },
              index: index + 1,
            }),
          {index: 0, result: {}}
        ).result;

      return {
        ...state,
        [roomID]: {
          userID,
          secret,
          roomName,
          roomUsers,
          roomMessages,
          orderedMessages,
        },
      };
    }
    case actions.REJECT_JOIN_ROOM: {
      console.log(`Join room rejected: ${action.description}`);
      // TODO: show the error to user instead
      return state;
    }

    default: return state;
  }
};

