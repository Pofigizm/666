import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { connect } from 'react-redux';
import { changeViewMessages } from '../../actions';
import { partMessages } from '../../smartActions';

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

  componentDidMount() {
    // initial request for render
    const mess = findDOMNode(this.refs.messages);
    mess.scrollTop = mess.scrollTop - 1;
  }

  componentWillUpdate() {
    const mess = findDOMNode(this.refs.messages);
    this.scrollTop = mess.scrollTop;
  }

  componentDidUpdate() {
    const { room } = this.props;
    const mess = findDOMNode(this.refs.messages);
    const updateBottom = room.updateBottom;
    console.log(updateBottom, mess.scrollTop, this.scrollTop);
    if (updateBottom) {
      this.preventScroll = updateBottom;
      mess.scrollTop = this.scrollTop;
      this.scrollHandler(mess, true);
    }
  }

  scrollHandler(elem, manual) {
    const { dispatch, roomID } = this.props;
    if (!manual && this.preventScroll) {
      this.preventScroll = false;
      return;
    }
    const { clientHeight, scrollTop, scrollHeight } = elem;
    const view = { clientHeight, scrollTop, scrollHeight };
    dispatch(changeViewMessages(roomID, view));
    dispatch(partMessages(roomID));
  }

  render() {
    return (
      <div
        className="room-messages"
        ref="messages"
        onScroll={e => this.onScroll(e.target)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default connect()(Infinity);

