import React from 'react';

import Message from '../Message';
import './index.scss';

export default ({ messages }) => (
  <ul className="messages">
    {messages.map((message, index) =>
      <Message
        message={message}
        key={index}
      />
    )}
  </ul>
);

