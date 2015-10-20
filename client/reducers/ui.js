import * as actions from '../actions';

const initialUi = {
  navigationCollapsed: false,
  previewCollapsed: false,
  searchInputText: '',
  roomInputText: '',
  searchResults: null,
};

/*
   ui: {
     navigationCollapsed: boolean,
     previewCollapsed: boolean,
     searchInputText: string,
     roomInputText: string,
     searchResults: null || [{
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
    case actions.SEARCH_RESULTS_FAILED: {
      // TODO indicate the failure to the user?
      return {
        ...state,
        searchResults: null,
      };
    }
    case actions.SEARCH_RESULTS_UPDATE: {
      return {
        ...state,
        searchResults: action.results,
      };
    }
    case actions.SEARCH_INPUT_CHANGE: {
      return {
        ...state,
        searchInputText: action.text,
      };
    }
    case actions.TOGGLE_PREVIEW: {
      return {
        ...state,
        previewCollapsed: !state.previewCollapsed,
      };
    }
    case actions.ROOM_INPUT_CHANGE: {
      return {
        ...state,
        roomInputText: action.text,
      };
    }
    case actions.TOGGLE_NAVIGATION: {
      return {
        ...state,
        navigationCollapsed: !state.navigationCollapsed,
      };
    }
    default: return state;
  }
};

