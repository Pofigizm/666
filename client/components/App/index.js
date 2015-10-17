import React from 'react';
import './index.scss';

import Navigation from '../Navigation';
import Welcome from '../Splashes/Welcome';

export default ({ children, history }) => (
  <div className="app">
    <Navigation history={history} />
    {children ? children : <Welcome/>}
  </div>
);

