import React from 'react';

const onClick = (e, handler) => {
  e.preventDefault();
  handler();
};

export default ({
  collection,
  title,
  routerRoomID,
  badge,
  action,
  reset,
}) => (
  <div className="navigation-group">
    <h4 className="navigation-group-label">{title}</h4>
    <ul className="navigation-group-list">
      {collection.map( ({roomID, name, users}, index) =>
        <li key={index}
            className={
              roomID === routerRoomID ?
              'navigation-group-list-item navigation-group-list-item--active' :
              'navigation-group-list-item'
            }>
          <a href={`/room/${roomID}`}
            onClick={e => onClick(e, () => action(roomID))}
            title={name}>
              {`#${roomID}`}
          </a>
          {!badge ? false :
            <span className="badge">{users}</span>
          }
          {!reset ? false :
            <button
              className="reset-input"
              onClick={() => reset(roomID)}>
                x
              </button>
          }
        </li>
      )}
    </ul>
  </div>
);

