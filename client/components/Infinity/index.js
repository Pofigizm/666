import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { connect } from 'react-redux';
import { changeViewMessages } from '../../actions';

function debounce(fn, delay) {
  let timer = null;
  return function deb(...args) {
    clearTimeout(timer);
    timer = setTimeout(() =>
      fn.call(this, ...args), delay);
  };
}

class Infinity extends Component {
  componentWillMount() {
    this.onScroll = debounce(this.scrollHandler, 300);
    this.preventScroll = false;
  }

  componentWillUpdate() {
    const mess = findDOMNode(this.refs.messages);
    this.scrollTop = mess.scrollTop;
  }

  componentDidUpdate() {
    const { dispatch, room, roomID } = this.props;
    const mess = findDOMNode(this.refs.messages);
    const updateBottom = room.updateBottom;
    console.log(updateBottom, mess.scrollTop, this.scrollTop);
    this.preventScroll = updateBottom;
    mess.scrollTop = updateBottom ? this.scrollTop : mess.scrollTop;
    if (updateBottom) {
      this.scrollHandler(mess, view => dispatch(changeViewMessages(roomID, view)), true);
    }
  }

  scrollHandler(elem, handler, manual) {
    if (!manual && this.preventScroll) {
      preventScroll = false;
      return;
    }
    const { clientHeight, scrollTop, scrollHeight } = elem;
    handler({ clientHeight, scrollTop, scrollHeight });
  }

  render() {
    const { dispatch, roomID } = this.props;
    return (
      <div
        className="room-messages"
        ref="messages"
        onScroll={e => this.onScroll(e.target, view => dispatch(changeViewMessages(roomID, view)))}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect()(Infinity);

