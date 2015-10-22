import * as actions from '../actions';
import { Map } from 'immutable';

const initialUi = Map({
  navigationCollapsed: false,
  previewCollapsed: false,
  searchInputText: '',
  roomInputText: '',
  searchResults: null,
});

/*
   ui: {
     navigationCollapsed: boolean,
     previewCollapsed: boolean,
     searchInputText: string,
     roomInputText: string,
     searchResults: [{
       roomID: string,
       name: string,
       users: number,
       rating: number,
     }],
   }
*/

export default (state = initialUi, action) => {
  switch (action.type) {
    case actions.CREATE_ROOM_FAILED: {
      // TODO handle it here.
      console.log('CREATE_ROOM_FAILED', action.description);
      return state;
    }
    case actions.SEARCH_RESULTS_FAILED:
      return state.set('searchResults', null);
    case actions.SEARCH_RESULTS_UPDATE:
      return state.set('searchResults', action.results);
    case actions.SEARCH_INPUT_CHANGE:
      return state.set('searchInputText', action.text);
    case actions.TOGGLE_PREVIEW:
      return state.set('previewCollapsed', !state.get('previewCollapsed'));
    case actions.ROOM_INPUT_CHANGE:
      return state.set('roomInputText', action.text);
    case actions.TOGGLE_NAVIGATION:
      return state.set('navigationCollapsed', !state.get('navigationCollapsed'));
    default:
      return state;
  }
};

