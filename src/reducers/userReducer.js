import {
  LOGIN_SUCCESS,
  SET_USER_INFO,
  LOGIN_FAIL,
  LOG_OUT,
  FETCH_ENTRIES,
  SET_CURRENT_ENTRY
} from './../actions/types';

const initialState = {
  loginStatus: null,
  userInfo: null,
  entries: [],
  currentEntry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loginStatus: true };
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    case LOGIN_FAIL:
      return { ...state, loginStatus: false };
    case FETCH_ENTRIES:
      return { ...state, entries: action.payload };
    case SET_CURRENT_ENTRY:
      return { ...state, currentEntry: action.payload };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
}
