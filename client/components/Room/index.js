import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import './index.scss';

import { connect } from 'react-redux';
import RoomHeader from '../RoomHeader';
import MessageList from '../MessageList';
import RoomInput from '../RoomInput';
import { changeViewMessages } from '../../actions';

let preventScroll = false;

function debounce(fn, delay) {
  let timer = null;
  return function deb(...args) {
    clearTimeout(timer);
    timer = setTimeout(() =>
      fn.call(this, ...args), delay);
  };
}

function scrollHandler(elem, handler, manual) {
  if (!manual && preventScroll) {
    preventScroll = false;
    return;
  }
  const { clientHeight, scrollTop, scrollHeight } = elem;
  handler({ clientHeight, scrollTop, scrollHeight });
}
const onScroll = debounce(scrollHandler, 300);

class Room extends Component {
  componentWillUpdate() {
    const mess = findDOMNode(this.refs.messages);
    this.scrollTop = mess.scrollTop;
  }

  componentDidUpdate() {
    const { dispatch, room, roomID } = this.props;
    const mess = findDOMNode(this.refs.messages);
    const updateBottom = room.updateBottom;
    console.log(updateBottom, mess.scrollTop, this.scrollTop);
    preventScroll = updateBottom;
    mess.scrollTop = updateBottom ? this.scrollTop : mess.scrollTop;
    if (updateBottom) {
      scrollHandler(mess, view => dispatch(changeViewMessages(roomID, view)), true);
    }
  }

  render() {
    const { dispatch, room, roomID } = this.props;

    const { viewMessages, roomMessages, roomUsers } = room;
    const messages = viewMessages.map(messageID => {
      const { text, time, userID,
              status, attachments } = roomMessages[messageID];
      const { nick, avatar } = roomUsers[userID] ? roomUsers[userID] : {
        nick: 'Leaved user',
        avatar: '', // TODO link to our logo with anonym man
      };
      const isOurMessage = userID === room.userID;

      return {
        text,
        time,
        nick,
        isOurMessage,
        avatar,
        status,
        attachments,
      };
    });

    return (
      <div className="room">
        <RoomHeader room={room} />
        <div
          className="room-messages"
          ref="messages"
          id="roomMessages"
          onScroll={e => onScroll(e.target, view => dispatch(changeViewMessages(roomID, view)))}
        >
          <MessageList messages={messages} />
        </div>
        <RoomInput />
      </div>
    );
  }
}

export default connect()(Room);

