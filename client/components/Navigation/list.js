import React from 'react';

function onClick(e, handler) {
  e.preventDefault();
  handler();
}

export default ({ collection, title, ui, actions }) => (
  <div className="navigation-group">
    <h4 className="navigation-group-label">{title}</h4>
    <ul className="navigation-group-list">
      {collection.map( ({roomID, name, users}, index) =>
        <li key={index}
            className={
              ui && roomID === ui.routerRoomID ?
              'navigation-group-list-item navigation-group-list-item--active' :
              'navigation-group-list-item'
            }>
          <a href={`/room/${roomID}`}
            onClick={e => onClick(e, actions.main(roomID))}
            title={name}>
              {`#${roomID}`}
          </a>
          {!ui.showBadge ? false :
            <span className="badge">{users}</span>
          }
          {!ui.showReset ? false :
            <button
              className="reset-input"
              onClick={e => onClick(e, action.reset(roomID))}>
                x
              </button>
          }
        </li>
      )}
    </ul>
  </div>
);

