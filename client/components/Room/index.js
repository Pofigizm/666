import React, { Component } from 'react';
import './index.scss';

import { connect } from 'react-redux';
import RoomHeader from '../RoomHeader';
import Infinity from '../Infinity';
import MessageList from '../MessageList';
import RoomInput from '../RoomInput';

class Room extends Component {
  render() {
    const { room, roomID } = this.props;

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
        <Infinity room={room} roomID={roomID}>
          <MessageList messages={messages} />
        </Infinity>
        <RoomInput />
      </div>
    );
  }
}

export default connect()(Room);

