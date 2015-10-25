import React from 'react';
import { List } from 'immutable';
import './index.scss';

import { connect } from 'react-redux';
import {
  switchToRoom,
  leaveRoom,
  createRoom,
  searchInputChange,
} from '../../smartActions';

import NavList from './list';

const Navigation = ({
  dispatch,
  history,
  joinedRooms,
  topRooms,
  routerRoomID,
  navigationCollapsed,
  searchInputText,
  searchResults,
}) => {
  // TODO beautify it (looks wery agly)
  const creation = (searchInputText.length > 0 &&
    !searchResults.find(({roomID}) => roomID === searchInputText)) ?
    List.of({roomID: searchInputText}) : List();
  const listedRooms = joinedRooms
    .reduce((res, room, roomID) => res.push({
      roomID,
      name: room.get('name'),
      users: room.get('roomUsers').count(),
    }), List());
  const wrapper = smart => data => dispatch( smart(history, data) );
  return (
    <nav className={
      navigationCollapsed ?
      'navigation is-collapsed' :
      'navigation'
    }>
      <div className="navigation-group">
        <input
          onChange={e => wrapper(searchInputChange)(e.target.value)}
          value={searchInputText}
          type="text"
          className="input--underline"
          placeholder="# Find / Create new" />
      </div>
      {!creation.count() ? false :
        <NavList
          collection={creation}
          title="Create Room"
          action={wrapper(createRoom)}
        />
      }
      {!searchResults.count() ? false :
        <NavList
          collection={searchResults}
          title="Search Results"
          badge
          action={wrapper(switchToRoom)}
        />
      }
      {!listedRooms.count() ? false :
        <NavList
          collection={listedRooms}
          title="Joined Rooms"
          routerRoomID={routerRoomID}
          action={wrapper(switchToRoom)}
          reset={wrapper(leaveRoom)}
        />
      }
      {!topRooms.count() ? false :
        <NavList
          collection={topRooms}
          title="Top Channels"
          badge
          action={wrapper(switchToRoom)}
        />
      }
    </nav>
  );
};

export default connect(state => ({
  joinedRooms: state.get('joinedRooms'),
  topRooms: state.get('topRooms'),
  routerRoomID: state.getIn(['router', 'params', 'roomID']),
  navigationCollapsed: state.getIn(['ui', 'navigationCollapsed']),
  searchInputText: state.getIn(['ui', 'searchInputText']),
  searchResults: state.getIn(['ui', 'searchResults']),
}))(Navigation);

