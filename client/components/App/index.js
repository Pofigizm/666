import React from 'react';
import './index.scss';

import Navigation from '../Navigation';
import Welcome from '../Splashes/Welcome';
import DevTools from '../DevTools';

export default ({ children, history }) => (
  <div className="app">
    <Navigation history={history} />
    {children ? children : <Welcome/>}
    {__DEV__ ? <DevTools /> : null}
  </div>
);

