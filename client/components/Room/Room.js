import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { messagesT } from '../../propTypes';
import RoomHeader from '../RoomHeader/RoomHeader';
import MessageList from '../MessageList/MessageList';
import RoomInput from '../RoomInput/RoomInput';
import './Room.scss';
import { sendMessage } from '../../smartActions';

class Room extends Component {
  render() {
    const { dispatch, room } = this.props;
    const { roomID, secret, orderedMessages,
            roomMessages, roomUsers } = room;
    const userID = this.props.room.userID;
    const messages = orderedMessages.map(messageID => {
      const { text, time, userID: key, status } = roomMessages[messageID];
      const { nick, avatar } = roomUsers[key];
      return {
        text,
        time,
        nick,
        avatar,
        status,
      };
    });
    const onSend = text => dispatch(sendMessage({
      roomID,
      userID,
      secret,
      text,
      // no time here!
    }));

    return (
      <div className="room">
        <RoomHeader room={room} />
        <div className="room-messages">
          <MessageList
            messages={messages}
          />
        </div>
        <RoomInput
          onSend={onSend}
        />
      </div>
    );
  }
}

export default connect()(Room);
