import '../scss/main.scss';
import 'babel-core/polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { Route } from 'react-router';

import App from './App';
import RoomEntrance from './RoomEntrance';
import NotFound from './Splashes/NotFound';

const Index = ({ store }) => (
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/" component={App}>
        <Route path="/room/:roomID" component={RoomEntrance}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </ReduxRouter>
  </Provider>
);

export default store => render(
  <Index store={store} />,
  document.getElementById('content')
);

