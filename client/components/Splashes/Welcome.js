import React from 'react';
import './index.scss';

import { switchToRoom } from '../../smartActions';
import { connect } from 'react-redux';

const Welcome = ({ dispatch }) => (
  <div className="splash">
    <article className="article">
      <h1 className="giga">Welcome</h1>
      <h2>Make yourself at home</h2>
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

export default connect()(Welcome);

