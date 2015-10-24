import React from 'react';
import './index.scss';

import { connect } from 'react-redux';
import { toggleNavigation } from '../../actions';

const RoomHeader = ({ dispatch, navigationCollapsed, room }) => {
  const { name } = room;
  const { nick, avatar } = room.roomUsers[room.userID] || {}; // TODO fix it

  return (
    <header className="room-header">
      <ul className="room-header-bar"
          onClick={() => dispatch(toggleNavigation())}>
        <li className="room-header-bar-item">
          <i className={navigationCollapsed ? 'iconNav is-hidden' : 'iconNav'}>
            <b className="iconNav-line"></b>
            <b className="iconNav-line"></b>
            <b className="iconNav-line"></b>
          </i>
        </li>
        <li className="room-header-bar-item">
          <h4 className="room-name">#{name}</h4>
        </li>
      </ul>
      <ul className="room-header-bar">
        <li>
          <h4 className="user-name">
            {nick}
          </h4>
        </li>
          <li>
            <div
              className="user-ava ava"
              style={{ backgroundImage: `url(${ avatar })` }}>
            </div>
          </li>
        </ul>
    </header>
  );
};

export default connect(immState => {
  const state = immState.toJS();
  const { navigationCollapsed } = state.ui;
  return {
    navigationCollapsed,
  };
})(RoomHeader);

