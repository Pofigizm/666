import RenderComponents from './components';
import reducers from './reducers';
import create from './store';

import { restoreState } from './smartActions';
import { readState } from './storage';

import {
  onMessage,
  onAttachment,
  onJoinUser,
  onLeaveUser,
  onTopRooms,
} from './transport';

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

onMessage(     data => dispatch( newMessage(data)    ) );
onAttachment(  data => dispatch( newAttachment(data) ) );
onJoinUser(    data => dispatch( joinUser(data)      ) );
onLeaveUser(   data => dispatch( leaveUser(data)     ) );
onTopRooms( ({rms}) => dispatch( updateTopRooms(rms) ) );

dispatch( restoreState(last) );

