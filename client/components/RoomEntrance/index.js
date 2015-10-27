import React from 'react';

import { connect } from 'react-redux';
import { joinRoom } from '../../smartActions';
import Room from '../Room';

function onClick(e, handler) {
  e.preventDefault();
  handler();
}

const RoomEntrance = ({ roomLoading, roomLoaded, room, roomID, dispatch }) => {
  if (roomLoaded) {
    return <Room room={room.toJS()} roomID={roomID} />;
  } else if (roomLoading) {
    return ( <div className="splash">
      <article className="article">
        <h1>Loading...</h1>
        <h2>Joining #{roomID}</h2>

        <div className="loader" style={{ 'marginTop': '2em' }}>
          <div className="loader-item"></div>
          <div className="loader-item"></div>
          <div className="loader-item"></div>
        </div>
      </article>
    </div> );
  }
  return ( <div className="splash">
      <article className="article">
        <h1>You have left this room.</h1>
        <p className="faded">
          <span className="btn btn--outline"
              onClick={e => onClick(e, () =>
                dispatch(joinRoom({ roomID })))}
              title={name}>
              Rejoin #{roomID}
          </span>
        </p>
      </article>
    </div> );
};

export default connect(state => {
  const roomID = state.getIn(['router', 'params', 'roomID']);
  return {
    roomLoading: state.hasIn(['joiningRooms', roomID]),
    roomLoaded: state.hasIn(['joinedRooms', roomID]),
    // TODO connect part of room by self
    room: state.getIn(['joinedRooms', roomID]),
    roomID,
  };
})(RoomEntrance);

