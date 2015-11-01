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
    .setIn(
      ['roomMessages', pendingID, 'status'],
      'rejected'
    );
}

function changeViewMessages(room, action) {
  const orderMessages = room.get('orderedMessages');
  const viewMessages = room.get('viewMessages');
  const viewState = action.view ? action.view : room.get('viewState');
  const { clientHeight, scrollTop, scrollHeight } = viewState;
  console.log(Boolean(action.view), clientHeight, scrollTop, scrollHeight);
  let updateBottom = true;

  const order = {
    count: orderMessages.count(),
    start: 0,
    end: orderMessages.count() - 1,
  };

  const view = {
    count: viewMessages.count(),
    start: orderMessages.indexOf(viewMessages.first()),
    end: orderMessages.indexOf(viewMessages.last()),
  };

  const next = {
    start: view.start,
    end: view.end,
  };

  const calcHeight = scrollHeight / view.count;
  const height = calcHeight && calcHeight > 80 ? calcHeight : 80;
  const client = Math.ceil(clientHeight / height);
  const calcNeed = client * 10;
  const need = calcNeed && calcNeed > 20 ? calcNeed : 20;

  const left = scrollHeight - (scrollTop + (clientHeight / 2));
  const calcDiff = Math.ceil(left / height);
  const diff = calcDiff && calcDiff > 2 ? calcDiff : 2;
  const add = Math.ceil((need * 2 / 5) - diff);
  const rem = Math.ceil(diff - (need * 3 / 5));
  console.log('--', client, need, diff, add, rem);

  let end = add > 0 ? view.end + add : view.end;
  end = rem > 0 && view.end > need ? view.end - rem : end;
  next.end = end > order.end ? order.end : end;

  if (next.end === view.end) {
    updateBottom = false;
    const one = next.end - need;
    next.start = one > 0 ? one : 0;
  }

  // scroll to new if condition
  const lastMessageInView = scrollHeight - (clientHeight + scrollTop) < height;
  if (action.message && next.end === order.end && lastMessageInView) {
    updateBottom = false;
  }

  next.count = next.end - next.start + 1;
  const expectedTop = updateBottom && next.count < need && next.start > 0;
  const messages = orderMessages.slice(next.start, next.end + 1);

  console.log('order', order.count, order.start, order.end);
  console.log('view', view.count, view.start, view.end);
  console.log('next', next.count, next.start, next.end);
  console.log(updateBottom, expectedTop);

  return room
    .set('updateBottom', updateBottom)
    .set('expectedTop', expectedTop)
    .set('viewState', viewState)
    .set('viewMessages', messages);
}

function addPartMessages(room, action) {
  if (action.messages.length === 0) {
    return room
      .set('isAllMessages', true);
  }

  const oldMessages = room.get('orderedMessages');
  const newMessages = action.messages
    .filter(curr => !~oldMessages.indexOf(curr.messageID));
  console.log(newMessages.length);
  if (newMessages.length === 0) return room;

  const orderedMessages = newMessages
    .reduce((res, {messageID}) => res.push(messageID), List())
    .concat(oldMessages);
  const roomMessages = newMessages
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
        Map({}))
    .concat(room.get('roomMessages'));

  console.log('addPartMessages', orderedMessages.count(), roomMessages.count());

  return room
    .set('orderedMessages', orderedMessages)
    .set('roomMessages', roomMessages);
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
      attachments: [],
      status: 'sent' | 'confirmed' | 'rejected',
    }),
    orderedMessages: ['messageID'],
    updateBottom: boolean,
    expectedTop: boolean,
    viewState: {},
    viewMessages: ['messageID'],
  });
*/

export default (state = Map(), action) => {
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
    case actions.CHANGE_VIEW_MESSAGES:  return inside(changeViewMessages);
    case actions.ADD_PART_MESSAGES:     return inside(addPartMessages);
    default: return state;
  }
};

