import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import './index.scss';

import { connect } from 'react-redux';
import { sendMessage } from '../../smartActions';
import { roomInputChange } from '../../actions';

function onKeyPress(e, handler) {
  if (e.which === 13 && !e.shiftKey) {
    e.preventDefault();
    handler();
  }

  const roomMessages = document.getElementById('roomMessages');
  if (roomMessages !== null) {
    roomMessages.scrollTop = roomMessages.scrollHeight;
  }
}

function onClick(e, handler) {
  e.preventDefault();
  handler();
}

class RoomInput extends Component {
  componentDidUpdate() {
    const textarea = findDOMNode(this.refs.textarea);
    textarea.style.height = '';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  render() {
    const { dispatch, text } = this.props;
    return (
      <form className="room-actions"
        onSubmit={e => onClick(e, () => dispatch(sendMessage()))}>
        <textarea
          type="text"
          ref="textarea"
          placeholder="Message..."
          className="room-actions-input input"
          onChange={e => dispatch(roomInputChange(e.target.value))}
          onKeyPress={e => onKeyPress(e, () => dispatch(sendMessage()))}
          rows="1"
          value={text}
        ></textarea>
        <button
          className="room-actions-send btn"
          type="submit"
          ref="submitBtn"
          disabled={!text.length}
        > Send </button>
      </form>
    );
  }
}

export default connect(state => ({
  text: state.getIn(['ui', 'roomInputText']),
}))(RoomInput);

