import * as actions from '../../actions';
import { Map, List } from 'immutable';

function joinUser(room, action) {
  const { userID, user } = action;

  return room
    .setIn(['roomUsers', userID], user);
}

function leaveUser(room, action) {
  const { userID } = action;

  return room
    .removeIn(['roomUsers', userID]);
}

function newMessage(room, action) {
  const { userID, messageID } = action.message;
  const { message } = action;
  if (room.get('userID') === userID) return room;

  return room
    .update('orderedMessages', om => om.push(messageID))
    .setIn(['roomMessages', messageID],
      Map(message)
        .set('attachments', List())
        .set('status', 'confirmed')
        .set('index', room.get('orderedMessages').count())
    );
}

function newAttachment(room, action) {
  const { messageID, meta, index, url } = action;
  const attachment = Map({ meta, index, url });
  if (!room.hasIn(['roomMessages', messageID])) return room;

  return room
    .updateIn(
      ['roomMessages', messageID, 'attachments'],
      at => at.push(attachment)
    );
}

function sentMessage(room, action) {
  const { text, time, pendingID } = action;
  const userID = room.get('userID');
  const messageID = pendingID;
  const message = {
    userID,
    messageID,
    text,
    time,
  };

  return room
    .update('orderedMessages', om => om.push(messageID))
    .setIn(['roomMessages', messageID],
      Map(message)
        .set('attachments', List())
        .set('status', 'sent')
        .set('index', room.get('orderedMessages').count())
    );
}

function confirmSentMessage(room, action) {
  const { pendingID, messageID, text } = action;
  const index = room.get('orderedMessages').indexOf(pendingID);
  if (!room.hasIn(['roomMessages', pendingID])) return room;

  const message = room
    .getIn(['roomMessages', pendingID])
    .set('status', 'confirmed')
    .set('text', text)
    .set('messageID', messageID);

  return room
    .removeIn(['roomMessages', pendingID])
    .setIn(['roomMessages', messageID], message)
    .setIn(['orderedMessages', index], messageID);
}

function rejectSentMessage(room, action) {
  const { pendingID } = action;

  return room
    .updateIn(
      ['roomMessages', pendingID, 'status'],
      'rejected'
    );
}

/*
  joinedRooms: HashMap('roomID', {
    userID: string,
    secret: string,
    name: string,
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

export default (state = Map({}), action) => {
  function inside(reducer) {
    const { roomID } = action;
    if (!state.has(roomID)) return state;

    return state
      .update(roomID, room => reducer(room, action));
  }

  switch (action.type) {
    case actions.JOIN_USER:             return inside(joinUser);
    case actions.LEAVE_USER:            return inside(leaveUser);
    case actions.NEW_MESSAGE:           return inside(newMessage);
    case actions.NEW_ATTACHMENT:        return inside(newAttachment);
    case actions.SENT_MESSAGE:          return inside(sentMessage);
    case actions.CONFIRM_SENT_MESSAGE:  return inside(confirmSentMessage);
    case actions.REJECT_SENT_MESSAGE:   return inside(rejectSentMessage);
    default: return state;
  }
};

