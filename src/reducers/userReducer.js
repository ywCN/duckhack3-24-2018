// import { LOGIN_SUCCESS, LOGIN_FAIL, FETCH_ENTRIES, ADD_ENTRY, EDIT_ENTRY, DELETE_ENTRY, SET_CURRENT_ENTRY } from '../actions/types';

const initialState = {
  userInfo: {},
  entries: [],
  currentEntryId: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    // case LOGIN_SUCCESS:
    //   return { ...state, ...action.payload };
    // case LOGIN_FAIL:
    //   console.log('logout reducer invoked');
    //   return null;
    default:
      return state;
  }
}