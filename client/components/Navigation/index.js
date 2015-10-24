import React from 'react';
import './index.scss';

import { connect } from 'react-redux';
import {
  switchToRoom,
  leaveRoom,
  createRoom,
  searchInputChange,
} from '../../smartActions';
import List from './list';

const rooms = hashedRooms => Object.keys(hashedRooms)
  .map( roomID => ({
    ...hashedRooms[roomID],
    roomID,
  }));

const getAction = (dispatch, history, smart) => data =>
  () => dispatch( smart(history, data) );

const Navigation = ({
  dispatch,
  collapsed,
  routerRoomID,
  shouldShowCreation,
  joinedRooms,
  topRooms,
  searchResults,
  searchText,
  history,
}) => (
  <nav className={
    collapsed ?
    'navigation is-collapsed' :
    'navigation'
  }>
    <div className="navigation-group">
      <input
        onChange={e => dispatch(searchInputChange(e.target.value))}
        value={searchText}
        type="text"
        className="input--underline"
        placeholder="# Find / Create new" />
    </div>
    {!shouldShowCreation ? false :
      <List
        collection={[{roomID: searchText}]}
        title="Create Room"
        actions={{ main: getAction(dispatch, history, createRoom) }}
      />
    }
    {!searchResults || !searchResults.length ? false :
      <List
        collection={searchResults}
        title="Search Results"
        ui={{ showBadge: true }}
        actions={{ main: getAction(dispatch, history, switchToRoom) }}
      />
    }
    {!rooms(joinedRooms).length ? false :
      <List
        collection={rooms(joinedRooms)}
        title="Joined"
        ui={{
          showReset: true,
          routerRoomID,
        }}
        actions={{
          main: getAction(dispatch, history, switchToRoom),
          reset: getAction(dispatch, history, leaveRoom),
        }}
      />
    }
    <List
      collection={topRooms}
      title="Top Channels"
      ui={{showBadge: true}}
      actions={{ main: getAction(dispatch, history, switchToRoom) }}
    />
  </nav>
);

export default connect(immState => {
  const state = immState.toJS();
  const collapsed = state.ui.navigationCollapsed;
  const { topRooms, joinedRooms } = state;
  const searchResults = state.ui.searchResults;
  const searchText = state.ui.searchInputText;
  const routerRoomID = state.router.params && state.router.params.roomID;
  const shouldShowCreation =
    searchText.length > 0 &&
    searchResults &&
    !(
      searchResults[0] &&
      searchText === searchResults[0].roomID
    );

  return {
    collapsed,
    topRooms,
    joinedRooms,
    searchResults,
    searchText,
    routerRoomID,
    shouldShowCreation,
  };
})(Navigation);

