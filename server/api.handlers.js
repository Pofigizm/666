import * as actions from './actions';

export const topRooms = () => actions.getTop()
  .then(data => {
    return {
      type: 'broadcast',
      event: 'topRooms',
      data,
    };
  });

const createRoom = request => () => actions.createRoom(request)
  .then(() => {
    return [{
      type: 'exchange',
    }];
  });

const joinRoom = request => () => actions.joinRoom(request)
  .then(({room, identity}) => {
    const { roomID } = room;
    const { userID, nick, avatar } = identity;
    const channel = `room:${room.roomID}`;

    return [{
      type: 'exchange',
      data: {
        room,
        identity,
      },
    }, {
      type: 'join',
      channel,
    }, {
      type: 'roomcast',
      event: 'joinUser',
      channel,
      data: {
        roomID,
        userID,
        nick,
        avatar,
      },
    },
    topRooms(),
    ];
  });

const partMessages = request => () => actions.partMessages(request)
  .then(({roomID, messages}) => {
    return [{
      type: 'exchange',
      data: {
        roomID,
        messages,
      },
    }];
  });

const leaveRoom = request => () => actions.leaveRoom(request)
  .then(({roomID, userID}) => {
    const channel = `room:${roomID}`;

    return [{
      type: 'exchange',
    }, {
      type: 'leave',
      channel,
    }, {
      type: 'roomcast',
      event: 'leaveUser',
      channel,
      data: {
        roomID,
        userID,
      },
    },
    topRooms(),
    ];
  });

const sendMessage = request => () => actions.message(request)
  .then(({data, metas}) => {
    const {roomID} = data;
    const channel = `room:${roomID}`;
    const reqMetas = metas.map(reqMeta => {
      return reqMeta
        .then(metaData => {
          return {
            type: 'roomcast',
            event: 'attachment',
            channel,
            data: metaData,
          };
        });
    });

    return [{
      type: 'exchange',
      data,
    }, {
      type: 'roomcast',
      event: 'message',
      channel,
      data,
    },
    ...reqMetas,
    ];
  });

const searchRoomID = request => () => actions.searchRoomID(request)
  .then(data => {
    return [{
      type: 'exchange',
      data,
    }];
  });

export const handlers = {
  createRoom,
  joinRoom,
  partMessages,
  leaveRoom,
  sendMessage,
  searchRoomID,
};

