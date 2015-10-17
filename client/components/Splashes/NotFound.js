import React from 'react';
import './index.scss';

import { connect } from 'react-redux';
import { switchToRoom } from '../../smartActions';

// Скопировано с Welcome
const NotFound = ({ dispatch }) => (
  <div className="splash">
    <article className="article">
      <h1 className="giga">Sorry</h1>
      <h2>The URL you specified is not valid</h2>
      <p>Join a room and find your new identity.</p>
    </article>
    <article className="article faded">
      <p><i className="iconShuffle"></i></p>
      <p>
        <button
          onClick={() => dispatch(switchToRoom(null))}
          className="btn btn--outline">
            Join random room
        </button>
      </p>
    </article>
  </div>
);

export default connect()(NotFound);

