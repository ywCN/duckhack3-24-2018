import firebase from 'firebase';
import {
  LOGIN_SUCCESS,
  SET_USER_INFO,
  LOGIN_FAIL,
  LOG_OUT,
  FETCH_ENTRIES,
  ADD_EMPTY_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY
  // SET_CURRENT_ENTRY
} from './types';

export const loginSuccess = (userInfo, redirect) => dispatch => {
  dispatch({ type: LOGIN_SUCCESS });
  dispatch({ type: SET_USER_INFO, payload: userInfo });
  redirect();
};

export const loginFail = () => dispatch => {
  dispatch({ type: LOGIN_FAIL });
};

export const logout = () => dispatch => {
  dispatch({ type: LOG_OUT });
};

export const fetchEntries = userId => dispatch => {
  firebase
    .database()
    .ref(`/users/${userId}/entries`)
    .on('value', snapshot => {
      dispatch({
        type: FETCH_ENTRIES,
        payload: snapshot.val()
      });
    });
};

export const createEmptyEntry = userId => dispatch => {
  firebase
    .database()
    .ref(`/users/${userId}/entries`)
    .push({ description: '', amount: 0 })
    .then(() => {
      dispatch({ type: ADD_EMPTY_ENTRY });
      dispatch(fetchEntries(userId));
    });
};

export const deleteEntry = (userId, entryId) => dispatch => {
  firebase
    .database()
    .ref(`/users/${userId}/entries/${entryId}`)
    .remove()
    .then(() => {
      dispatch({ type: DELETE_ENTRY });
      dispatch(fetchEntries(userId));
    });
};

export const updateEntry = (userId, entryId, entry) => dispatch => {
  firebase
    .database()
    .ref(`/users/${userId}/entries/${entryId}`)
    .set(entry)
    .then(() => {
      dispatch({ type: EDIT_ENTRY });
      dispatch(fetchEntries(userId));
    });
};

// export const setCurrentEntry = entry => {
//   return {
//     type: SET_CURRENT_ENTRY,
//     payload: entry
//   };
// };
