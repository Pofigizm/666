import * as actions from 'actions';

function joinUser(room, action) {
  const {userID} = action;
  return {
    ...room,
    roomUsers: {
      ...room.roomUsers,
      [userID]: action.user,
    },
  };
}

function leaveUser(room, action) {
  const {userID} = action;
  const users = room.roomUsers;
  const newUsers = Object.assign({}, users);
  delete newUsers[userID];
  return {
    ...room,
    roomUsers: newUsers,
  };
}

function newMessage(room, action) {
  const { message } = action;
  const userID = action.message.userID;
  const { messageID } = message;
  if (room.userID === userID) { // ignore our message
    return room;
  }
  return {
    ...room,
    // TODO: insert at correct time, not last in list.
    orderedMessages: [
      ...room.orderedMessages,
      messageID, // ! appended to the end.
    ],
    roomMessages: {
      ...room.roomMessages,
      [messageID]: {
        ...message,
        attachments: [], // TODO may by get it from server??
        status: 'confirmed',
        index: room.orderedMessages.length, // ! appended to the end.
      },
    },
  };
}

function newAttachment(room, action) {
  const { messageID, meta, index, url } = action;
  const message = room.roomMessages[messageID];
  if (!message) {
    // TODO handle situation;
    console.log('newAttachment could not find the messageID: `${messageID}`');
  }
  const { attachments } = message;
  return {
    ...room,
    roomMessages: {
      ...room.roomMessages,
      [messageID]: {
        ...message,
        attachments: [
          ...attachments,
          { meta, index, url },
        ],
      },
    },
  };
}

function sentMessage(room, action) {
  const { text, time, pendingID } = action;
  const { userID } = room;
  const messageID = pendingID;
  const message = {
    userID,
    messageID,
    text,
    time,
    attachments: [],
  };
  return {
    ...room,
    orderedMessages: [
      ...room.orderedMessages,
      messageID, // ! appended to the end.
    ],
    roomMessages: {
      ...room.roomMessages,
      [messageID]: {
        ...message,
        status: 'sent',
        index: room.orderedMessages.length, // ! appended to the end.
      },
    },
  };
}

function confirmSentMessage(room, action) {
  const { pendingID, messageID, text } = action;
  const { roomMessages, orderedMessages } = room;
  const { index } = roomMessages[pendingID];

  // TODO переписать покрасивее (без мутирования промежуточных значений?)

  const newRoomMessages = (() => {
    const tmp = Object.assign({}, roomMessages);
    tmp[messageID] = {
      ...tmp[pendingID],
      status: 'confirmed',
      text,
      messageID,
    };
    delete tmp[pendingID];
    return tmp;
  })();

  const newOrderedMessages = (() => {
    const tmp = [ ...orderedMessages ];
    tmp[index] = messageID;
    return tmp;
  })();

  return {
    ...room,
    roomMessages: newRoomMessages,
    orderedMessages: newOrderedMessages,
  };
}

function rejectSentMessage(room, action) {
  const { pendingID } = action;
  const { roomMessages } = room;
  const message = roomMessages[pendingID];

  return {
    ...room,
    roomMessages: {
      ...roomMessages,
      [pendingID]: {
        ...message,
        status: 'rejected',
      },
    },
  };
}

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

export default (state = {}, action) => {
  function insideRoom(roomID, reducer) {
    const room = state[roomID];
    if (!room) {
      console.log(`rooms ${action.type}: unexpected roomID "${roomID}"`);
      return state;
    }
    return {
      ...state,
      [roomID]: reducer(room, action),
    };
  }

  switch (action.type) {
    case actions.JOIN_USER:
      return insideRoom(action.roomID, joinUser);
    case actions.LEAVE_USER:
      return insideRoom(action.roomID, leaveUser);
    case actions.NEW_MESSAGE:
      return insideRoom(action.roomID, newMessage);
    case actions.NEW_ATTACHMENT:
      return insideRoom(action.roomID, newAttachment);
    case actions.SENT_MESSAGE:
      return insideRoom(action.roomID, sentMessage);
    case actions.CONFIRM_SENT_MESSAGE:
      return insideRoom(action.roomID, confirmSentMessage);
    case actions.REJECT_SENT_MESSAGE: {
      return insideRoom(action.roomID, rejectSentMessage);
    }
    default: return state;
  }
};

