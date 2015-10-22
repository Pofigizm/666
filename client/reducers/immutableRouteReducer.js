import { Map } from 'immutable';

const ROUTER_DID_CHANGE = '@@reduxReactRouter/routerDidChange';
const REPLACE_ROUTES = '@@reduxReactRouter/replaceRoutes';
const DOES_NEED_REFRESH = '@@reduxReactRouter/doesNeedRefresh';

/**
 * Reducer of ROUTER_DID_CHANGE actions. Returns a state object
 * with { pathname, query, params, navigationType }
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */

export default (state = Map({}), action) => {
  switch (action.type) {
    case ROUTER_DID_CHANGE:
      return Map(action.payload);
    case REPLACE_ROUTES:
      return state.set(DOES_NEED_REFRESH, true);
    default:
      return state;
  }
};

