import chai from "chai";
import reducer from '../reducers';
import Immutable from 'immutable';
const expect = chai.expect;

describe('handleActions', () => {

  it('check computedState_@@INIT_0 evaluation', () => {
    const curState = {};
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@INIT"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {}
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_1 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {}
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "POP",
          "key": "k14of4",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "POP",
          "key": "k14of4",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/replaceRoutes_2 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "POP",
          "key": "k14of4",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/replaceRoutes",
      "payload": {
        "key": null,
        "ref": null,
        "props": {
          "path": "/",
          "children": [{
            "key": null,
            "ref": null,
            "props": {
              "path": "/room/:roomID"
            },
            "_owner": null,
            "_store": {}
          }, {
            "key": null,
            "ref": null,
            "props": {
              "path": "*"
            },
            "_owner": null,
            "_store": {}
          }]
        },
        "_owner": null,
        "_store": {}
      }
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "POP",
          "key": "k14of4",
          "query": {}
        },
        "components": [null, null],
        "@@reduxReactRouter/doesNeedRefresh": true
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_3 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "POP",
          "key": "k14of4",
          "query": {}
        },
        "components": [null, null],
        "@@reduxReactRouter/doesNeedRefresh": true
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_4 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {},
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM",
      "roomID": "666"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_5 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": []
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_REJECT_JOIN_ROOM_6 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "REJECT_JOIN_ROOM",
      "description": "Error: Can not find user in unexisted room"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_7 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_REJECT_JOIN_ROOM_8 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "REJECT_JOIN_ROOM",
      "description": "Error: Can not join to random room"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_INPUT_CHANGE_9 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_INPUT_CHANGE",
      "text": "a"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_RESULTS_UPDATE_10 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_RESULTS_UPDATE",
      "results": []
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": []
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_RESULTS_UPDATE_11 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": []
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_RESULTS_UPDATE",
      "results": null
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_12 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM",
      "roomID": "a"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true,
        "a": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_JOIN_ROOM_13 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_JOIN_ROOM",
      "identity": {
        "roomID": "a",
        "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
        "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
        "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
        "nick": "Great Twinkies",
        "_id": "562745ee1920b3fe29d0cd2b"
      },
      "room": {
        "_id": "562745ee1920b3fe29d0cd2a",
        "roomID": "a",
        "name": "a",
        "__v": 0,
        "messages": [],
        "users": [{
          "_id": "562745ee1920b3fe29d0cd2b",
          "nick": "Great Twinkies",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "roomID": "a"
        }],
        "rating": 0
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_14 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": null,
          "action": "REPLACE",
          "key": "s5i3a3",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_15 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "a",
      "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
        "nick": "Great Twinkies"
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_16 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_ROOM_INPUT_CHANGE_17 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "ROOM_INPUT_CHANGE",
      "text": "b"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "b",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_TOGGLE_PREVIEW_18 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "b",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "TOGGLE_PREVIEW"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": true,
        "searchInputText": "a",
        "roomInputText": "b",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_TOGGLE_PREVIEW_19 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": true,
        "searchInputText": "a",
        "roomInputText": "b",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "TOGGLE_PREVIEW"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "b",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_ROOM_INPUT_CHANGE_20 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "b",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "ROOM_INPUT_CHANGE",
      "text": ""
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SENT_MESSAGE_21 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SENT_MESSAGE",
      "pendingID": "pending-message:0",
      "roomID": "a",
      "text": "b",
      "time": 1445414411861
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "pending-message:0": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "pending-message:0",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "sent",
              "index": 0
            }
          },
          "orderedMessages": ["pending-message:0"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_SENT_MESSAGE_22 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "pending-message:0": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "pending-message:0",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "sent",
              "index": 0
            }
          },
          "orderedMessages": ["pending-message:0"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_SENT_MESSAGE",
      "pendingID": "pending-message:0",
      "roomID": "a",
      "text": "b",
      "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_NEW_MESSAGE_23 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "NEW_MESSAGE",
      "roomID": "a",
      "message": {
        "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
        "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
        "text": "b",
        "time": 1445414411861
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_TOGGLE_NAVIGATION_24 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "TOGGLE_NAVIGATION"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": true,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_TOGGLE_NAVIGATION_25 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": true,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "TOGGLE_NAVIGATION"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_ROOM_INPUT_CHANGE_26 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "ROOM_INPUT_CHANGE",
      "text": "http://www.youtube.com/watch?v=RX761XVVM9o"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "http://www.youtube.com/watch?v=RX761XVVM9o",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_ROOM_INPUT_CHANGE_27 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "http://www.youtube.com/watch?v=RX761XVVM9o",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "ROOM_INPUT_CHANGE",
      "text": ""
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SENT_MESSAGE_28 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SENT_MESSAGE",
      "pendingID": "pending-message:1",
      "roomID": "a",
      "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
      "time": 1445414452667
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "pending-message:1": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "pending-message:1",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [],
              "status": "sent",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "pending-message:1"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_SENT_MESSAGE_29 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "pending-message:1": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "pending-message:1",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [],
              "status": "sent",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "pending-message:1"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_SENT_MESSAGE",
      "pendingID": "pending-message:1",
      "roomID": "a",
      "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
      "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_NEW_MESSAGE_30 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "NEW_MESSAGE",
      "roomID": "a",
      "message": {
        "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
        "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
        "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
        "time": 1445414452667
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_NEW_ATTACHMENT_31 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "NEW_ATTACHMENT",
      "roomID": "a",
      "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
      "url": "http://youtube.com/watch?v=RX761XVVM9o",
      "index": 0,
      "meta": {
        "data": {
          "success": "true",
          "ogSiteName": "YouTube",
          "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
          "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
          "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
          "ogType": "video",
          "ogImage": {
            "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
          },
          "ogVideo": {
            "width": "1280",
            "height": "720",
            "type": "text/html"
          }
        },
        "success": true
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_32 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_33 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "a",
      "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
        "nick": "Awesome Turtle"
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_34 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_NEW_MESSAGE_35 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "NEW_MESSAGE",
      "roomID": "a",
      "message": {
        "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
        "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
        "text": "zzz",
        "time": 1445414499275
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "text": "zzz",
              "time": 1445414499275,
              "attachments": [],
              "status": "confirmed",
              "index": 2
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_36 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "text": "zzz",
              "time": 1445414499275,
              "attachments": [],
              "status": "confirmed",
              "index": 2
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8phkvl",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "text": "zzz",
              "time": 1445414499275,
              "attachments": [],
              "status": "confirmed",
              "index": 2
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_LEAVE_ROOM_37 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "secret": "bd15b411-578a-4d92-a13f-57ef856d76b9",
          "roomName": "a",
          "roomUsers": {
            "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218&s=male&size=64",
              "nick": "Great Twinkies"
            },
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "text": "b",
              "time": 1445414411861,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "attachments": [{
                "meta": {
                  "data": {
                    "success": "true",
                    "ogSiteName": "YouTube",
                    "ogUrl": "https://www.youtube.com/watch?v=RX761XVVM9o",
                    "ogTitle": "Тест-драйв от Давидыча Tesla Model s85+",
                    "ogDescription": "Если вы хотите предложить свой Автомобиль на Тест Драйв Пишите eric@smotra.ru или promo@smotra.ru По вопросам рекламы promo@smotra.ru Выражаем Благодарность....",
                    "ogType": "video",
                    "ogImage": {
                      "url": "http://i.ytimg.com/vi/RX761XVVM9o/maxresdefault.jpg"
                    },
                    "ogVideo": {
                      "width": "1280",
                      "height": "720",
                      "type": "text/html"
                    }
                  },
                  "success": true
                },
                "index": 0,
                "url": "http://youtube.com/watch?v=RX761XVVM9o"
              }],
              "status": "confirmed",
              "index": 1
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "text": "zzz",
              "time": 1445414499275,
              "attachments": [],
              "status": "confirmed",
              "index": 2
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "LEAVE_ROOM",
      "roomID": "a"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_38 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_39 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM",
      "roomID": "a"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true,
        "a": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_JOIN_ROOM_40 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_JOIN_ROOM",
      "identity": {
        "roomID": "a",
        "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
        "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
        "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
        "nick": "Awesome Dragon",
        "_id": "562746771920b3fe29d0cd30"
      },
      "room": {
        "_id": "562745ee1920b3fe29d0cd2a",
        "roomID": "a",
        "name": "a",
        "__v": 0,
        "messages": [{
          "_id": "5627460b1920b3fe29d0cd2c",
          "time": 1445414411861,
          "text": "b",
          "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "roomID": "a"
        }, {
          "_id": "562746341920b3fe29d0cd2d",
          "time": 1445414452667,
          "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
          "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
          "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
          "roomID": "a"
        }, {
          "_id": "562746631920b3fe29d0cd2f",
          "time": 1445414499275,
          "text": "zzz",
          "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
          "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
          "roomID": "a"
        }],
        "users": [{
          "_id": "562746521920b3fe29d0cd2e",
          "nick": "Awesome Turtle",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
          "secret": "4aa6a3bd-b700-464e-b516-b148fbf30502",
          "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
          "roomID": "a"
        }, {
          "_id": "562746771920b3fe29d0cd30",
          "nick": "Awesome Dragon",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "roomID": "a"
        }],
        "rating": 1
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_41 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bnf3ie",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_42 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "a",
      "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
        "nick": "Awesome Dragon"
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_43 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_LEAVE_USER_44 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=5f08bf6b-3b0c-425b-97a3-e5acecdaf23d&s=male&size=64",
              "nick": "Awesome Turtle"
            },
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "LEAVE_USER",
      "roomID": "a",
      "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_45 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_46 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_47 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM",
      "roomID": "b"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true,
        "b": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_JOIN_ROOM_48 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_JOIN_ROOM",
      "identity": {
        "roomID": "b",
        "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
        "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
        "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
        "nick": "Cheesy Peppermints",
        "_id": "562746961920b3fe29d0cd33"
      },
      "room": {
        "_id": "562746901920b3fe29d0cd31",
        "roomID": "b",
        "name": "b",
        "__v": 0,
        "messages": [],
        "users": [{
          "_id": "562746901920b3fe29d0cd32",
          "nick": "Endless Bandwidth",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
          "secret": "8c42618b-6861-4923-94f3-7289c61e00f2",
          "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
          "roomID": "b"
        }, {
          "_id": "562746961920b3fe29d0cd33",
          "nick": "Cheesy Peppermints",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "roomID": "b"
        }],
        "rating": 1
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_49 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "a"
        },
        "location": {
          "pathname": "/room/a",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "8jllhg",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_50 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "b",
      "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
        "nick": "Cheesy Peppermints"
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_51 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_ROOM_INPUT_CHANGE_52 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "ROOM_INPUT_CHANGE",
      "text": "z"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "z",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_ROOM_INPUT_CHANGE_53 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "z",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "ROOM_INPUT_CHANGE",
      "text": ""
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SENT_MESSAGE_54 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SENT_MESSAGE",
      "pendingID": "pending-message:2",
      "roomID": "b",
      "text": "z",
      "time": 1445414555416
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "pending-message:2": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "pending-message:2",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "sent",
              "index": 0
            }
          },
          "orderedMessages": ["pending-message:2"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_SENT_MESSAGE_55 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "pending-message:2": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "pending-message:2",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "sent",
              "index": 0
            }
          },
          "orderedMessages": ["pending-message:2"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_SENT_MESSAGE",
      "pendingID": "pending-message:2",
      "roomID": "b",
      "text": "z",
      "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_NEW_MESSAGE_56 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "NEW_MESSAGE",
      "roomID": "b",
      "message": {
        "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
        "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
        "text": "z",
        "time": 1445414555416
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_NEW_MESSAGE_57 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "NEW_MESSAGE",
      "roomID": "b",
      "message": {
        "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
        "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
        "text": "x",
        "time": 1445414562016
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_LEAVE_USER_58 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "cf5c4904-406a-4483-a35d-07fe82b010d8": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cf5c4904-406a-4483-a35d-07fe82b010d8&s=female&size=64",
              "nick": "Endless Bandwidth"
            },
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "LEAVE_USER",
      "roomID": "b",
      "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_59 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 2,
        "users": 2
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_60 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "b"
        },
        "location": {
          "pathname": "/room/b",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "fl1zp9",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_LEAVE_ROOM_61 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        },
        "b": {
          "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
          "secret": "8abf0dbe-d1ec-4c60-b4ae-c0e811fb4f0b",
          "roomName": "b",
          "roomUsers": {
            "94b59696-24c1-40fc-b669-991e5cfe5bca": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=94b59696-24c1-40fc-b669-991e5cfe5bca&s=male&size=64",
              "nick": "Cheesy Peppermints"
            }
          },
          "roomMessages": {
            "321e6602-162a-45f3-ae46-b6cc856466f1": {
              "userID": "94b59696-24c1-40fc-b669-991e5cfe5bca",
              "messageID": "321e6602-162a-45f3-ae46-b6cc856466f1",
              "text": "z",
              "time": 1445414555416,
              "attachments": [],
              "status": "confirmed",
              "index": 0
            },
            "0168562e-921f-49a2-ae6b-1eca3fb09139": {
              "userID": "cf5c4904-406a-4483-a35d-07fe82b010d8",
              "messageID": "0168562e-921f-49a2-ae6b-1eca3fb09139",
              "text": "x",
              "time": 1445414562016,
              "attachments": [],
              "status": "confirmed",
              "index": 1
            }
          },
          "orderedMessages": ["321e6602-162a-45f3-ae46-b6cc856466f1", "0168562e-921f-49a2-ae6b-1eca3fb09139"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "LEAVE_ROOM",
      "roomID": "b"
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_62 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "b",
        "name": "b",
        "rating": 1,
        "users": 1
      }, {
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_LEAVE_ROOM_63 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "a": {
          "userID": "cef67dfc-2e9e-43bd-9076-cc7a2fd71583",
          "secret": "ee19e318-612c-400f-9a1b-2b187aa4f370",
          "roomName": "a",
          "roomUsers": {
            "cef67dfc-2e9e-43bd-9076-cc7a2fd71583": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=cef67dfc-2e9e-43bd-9076-cc7a2fd71583&s=female&size=64",
              "nick": "Awesome Dragon"
            }
          },
          "roomMessages": {
            "de49cc9e-5814-4741-a35c-bdcb1e45f1a3": {
              "messageID": "de49cc9e-5814-4741-a35c-bdcb1e45f1a3",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "b",
              "time": 1445414411861,
              "status": "confirmed",
              "index": 0,
              "attachments": []
            },
            "c686ab00-c5cf-4846-81cc-f90a79a10c2b": {
              "messageID": "c686ab00-c5cf-4846-81cc-f90a79a10c2b",
              "userID": "fbd3820e-6fdf-4902-9c1f-3e2d8c0ca218",
              "text": "http://www.youtube.com/watch?v=RX761XVVM9o",
              "time": 1445414452667,
              "status": "confirmed",
              "index": 1,
              "attachments": []
            },
            "f1af6b9c-52ba-4330-83f7-a4681d83e4df": {
              "messageID": "f1af6b9c-52ba-4330-83f7-a4681d83e4df",
              "userID": "5f08bf6b-3b0c-425b-97a3-e5acecdaf23d",
              "text": "zzz",
              "time": 1445414499275,
              "status": "confirmed",
              "index": 2,
              "attachments": []
            }
          },
          "orderedMessages": ["de49cc9e-5814-4741-a35c-bdcb1e45f1a3", "c686ab00-c5cf-4846-81cc-f90a79a10c2b", "f1af6b9c-52ba-4330-83f7-a4681d83e4df"]
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "LEAVE_ROOM",
      "roomID": "a"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_64 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "a",
        "name": "a",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": []
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_INPUT_CHANGE_65 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "a",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_INPUT_CHANGE",
      "text": ""
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_RESULTS_UPDATE_66 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_RESULTS_UPDATE",
      "results": null
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_INPUT_CHANGE_67 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_INPUT_CHANGE",
      "text": "c"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_RESULTS_UPDATE_68 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_RESULTS_UPDATE",
      "results": []
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": []
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_SEARCH_RESULTS_UPDATE_69 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": []
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "SEARCH_RESULTS_UPDATE",
      "results": null
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_70 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM",
      "roomID": "c"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true,
        "c": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_JOIN_ROOM_71 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_JOIN_ROOM",
      "identity": {
        "roomID": "c",
        "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
        "secret": "248049db-8459-4fcd-b03d-b845582acb07",
        "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
        "nick": "Endless Dragon",
        "_id": "562746bb1920b3fe29d0cd37"
      },
      "room": {
        "_id": "562746bb1920b3fe29d0cd36",
        "roomID": "c",
        "name": "c",
        "__v": 0,
        "messages": [],
        "users": [{
          "_id": "562746bb1920b3fe29d0cd37",
          "nick": "Endless Dragon",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "roomID": "c"
        }],
        "rating": 0
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_72 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "82asgv",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_73 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "c",
      "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
        "nick": "Endless Dragon"
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_74 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_75 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "c",
      "userID": "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
        "nick": "Swollen Cafeteria"
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            },
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_76 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            },
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }]
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            },
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_77 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            },
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "jazput",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            },
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_LEAVE_ROOM_78 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "4f8c3f47-b528-4b7d-b333-22311fd628ee",
          "secret": "248049db-8459-4fcd-b03d-b845582acb07",
          "roomName": "c",
          "roomUsers": {
            "4f8c3f47-b528-4b7d-b333-22311fd628ee": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=4f8c3f47-b528-4b7d-b333-22311fd628ee&s=male&size=64",
              "nick": "Endless Dragon"
            },
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "LEAVE_ROOM",
      "roomID": "c"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_79 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }]
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOINING_ROOM_80 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOINING_ROOM"
    };
    const nextState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_CONFIRM_JOIN_ROOM_81 evaluation', () => {
    const curState = {
      "joinedRooms": {},
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "CONFIRM_JOIN_ROOM",
      "identity": {
        "roomID": "c",
        "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
        "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
        "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
        "nick": "Endless Cake",
        "_id": "562746c21920b3fe29d0cd39"
      },
      "room": {
        "_id": "562746bb1920b3fe29d0cd36",
        "roomID": "c",
        "name": "c",
        "__v": 0,
        "messages": [],
        "users": [{
          "_id": "562746bd1920b3fe29d0cd38",
          "nick": "Swollen Cafeteria",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
          "secret": "4078b7ae-cab1-40a8-aaca-d6d84bc2b676",
          "userID": "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a",
          "roomID": "c"
        }, {
          "_id": "562746c21920b3fe29d0cd39",
          "nick": "Endless Cake",
          "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "roomID": "c"
        }],
        "rating": 1
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_@@reduxReactRouter/routerDidChange_82 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }],
        "params": {},
        "location": {
          "pathname": "/",
          "search": "",
          "hash": "",
          "state": {},
          "action": "PUSH",
          "key": "bmufqd",
          "query": {}
        },
        "components": [null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "@@reduxReactRouter/routerDidChange",
      "payload": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": null,
          "action": "PUSH",
          "key": "vrk2a5",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": null,
          "action": "PUSH",
          "key": "vrk2a5",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_JOIN_USER_83 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": null,
          "action": "PUSH",
          "key": "vrk2a5",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "JOIN_USER",
      "roomID": "c",
      "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
      "user": {
        "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
        "nick": "Endless Cake"
      }
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": null,
          "action": "PUSH",
          "key": "vrk2a5",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });

  it('check computedState_UPDATE_TOP_ROOMS_84 evaluation', () => {
    const curState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 1,
        "users": 1
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": null,
          "action": "PUSH",
          "key": "vrk2a5",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const iState = Immutable.fromJS(curState);
    const action = {
      "type": "UPDATE_TOP_ROOMS",
      "rooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }]
    };
    const nextState = {
      "joinedRooms": {
        "c": {
          "userID": "3f508465-47d0-40f6-85ba-f317241cb958",
          "secret": "d8153f9f-3a8b-4277-8041-77aca8549dc9",
          "roomName": "c",
          "roomUsers": {
            "c5a03bb5-6862-4b9e-b565-c0b8f5253b0a": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=c5a03bb5-6862-4b9e-b565-c0b8f5253b0a&s=male&size=64",
              "nick": "Swollen Cafeteria"
            },
            "3f508465-47d0-40f6-85ba-f317241cb958": {
              "avatar": "http://eightbitavatar.herokuapp.com/?id=3f508465-47d0-40f6-85ba-f317241cb958&s=male&size=64",
              "nick": "Endless Cake"
            }
          },
          "roomMessages": {},
          "orderedMessages": []
        }
      },
      "joiningRooms": {
        "666": true,
        "undefined": true
      },
      "topRooms": [{
        "roomID": "c",
        "name": "c",
        "rating": 2,
        "users": 2
      }],
      "ui": {
        "navigationCollapsed": false,
        "previewCollapsed": false,
        "searchInputText": "c",
        "roomInputText": "",
        "searchResults": null
      },
      "router": {
        "routes": [{}, {
          "path": "/",
          "childRoutes": [{
            "path": "/room/:roomID"
          }, {
            "path": "*"
          }]
        }, {
          "path": "/room/:roomID"
        }],
        "params": {
          "roomID": "c"
        },
        "location": {
          "pathname": "/room/c",
          "search": "",
          "hash": "",
          "state": null,
          "action": "PUSH",
          "key": "vrk2a5",
          "query": {}
        },
        "components": [null, null, null]
      }
    };
    const computedNextState = reducer(iState, action);
    expect(computedNextState.toJS()).to.deep.equal(nextState);
  });


});
