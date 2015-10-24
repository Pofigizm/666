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

const arrayedRooms = hashedRooms => Object.keys(hashedRooms)
  .map( roomID => ({
    ...hashedRooms[roomID],
    roomID,
  }));

const wrapper = (dispatch, history, smart) => data =>
  dispatch( smart(history, data) );

const Navigation = ({
  dispatch,
  history,
  joinedRooms,
  topRooms,
  router,
  ui,
}) => {
  const routerRoomID = router.params && router.params.roomID;
  const { searchResults, searchInputText, navigationCollapsed } = ui;
  const shouldShowCreation =
    searchInputText.length > 0 &&
    searchResults &&
    !(
      searchResults[0] &&
      searchInputText === searchResults[0].roomID
    );
  return (
    <nav className={
      navigationCollapsed ?
      'navigation is-collapsed' :
      'navigation'
    }>
      <div className="navigation-group">
        <input
          onChange={e => dispatch(searchInputChange(history, e.target.value))}
          value={searchInputText}
          type="text"
          className="input--underline"
          placeholder="# Find / Create new" />
      </div>
      {!shouldShowCreation ? false :
        <List
          collection={[{ roomID: searchInputText }]}
          title="Create Room"
          action={wrapper(dispatch, history, createRoom)}
        />
      }
      {!searchResults || !searchResults.length ? false :
        <List
          collection={searchResults}
          title="Search Results"
          badge
          action={wrapper(dispatch, history, switchToRoom)}
        />
      }
      <List
        collection={arrayedRooms(joinedRooms)}
        title="Joined"
        routerRoomID={routerRoomID}
        action={wrapper(dispatch, history, switchToRoom)}
        reset={wrapper(dispatch, history, leaveRoom)}
      />
      <List
        collection={topRooms}
        title="Top Channels"
        badge
        action={wrapper(dispatch, history, switchToRoom)}
      />
    </nav>
  );
};

export default connect(state => {
  const { joinedRooms, topRooms, router, ui } = state.toJS();

  return {
    joinedRooms,
    topRooms,
    router,
    ui,
  };
})(Navigation);

