// import { LOGIN_SUCCESS, LOGIN_FAIL, FETCH_ENTRIES, ADD_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from '../actions/types';

const initialState = {
  user: {},
  entries: []
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