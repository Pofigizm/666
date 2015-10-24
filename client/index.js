import RenderComponents from './components';
import reducers from './reducers';
import create from './store';

import { restoreState } from './smartActions';
import { readState } from './storage';

import { broadcast, roomcast } from './transport';

import {
  updateTopRooms,
  newMessage,
  newAttachment,
  joinUser,
  leaveUser,
} from 'actions';

const last = readState();
const store = create(reducers);
const { dispatch } = store;

RenderComponents(store);

roomcast.message(    data => dispatch( newMessage(data)     ) );
roomcast.attachment( data => dispatch( newAttachment(data)  ) );
roomcast.joinUser(   data => dispatch( joinUser(data)       ) );
roomcast.leaveUser(  data => dispatch( leaveUser(data)      ) );
broadcast.topRooms(  data => dispatch( updateTopRooms(data) ) );

dispatch( restoreState(last) );

