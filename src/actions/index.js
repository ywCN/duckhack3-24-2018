import axios from 'axios';
import firebase from 'firebase';
import {
  LOGIN_SUCCESS,
  SET_USER_INFO,
  LOGIN_FAIL,
  LOG_OUT,
  FETCH_ENTRIES,
  ADD_EMPTY_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  SET_CURRENT_ENTRY
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

export const fetchEntries = currentUserId => dispatch => {
  firebase
    .database()
    .ref(`/users/${currentUserId}/entries`)
    .on('value', snapshot => {
      dispatch({
        type: FETCH_ENTRIES,
        payload: snapshot.val()
      });
    });
};

export const createEmptyEntry = currentUserId => dispatch => {
  firebase
    .database()
    .ref(`/users/${currentUserId}/entries`)
    .push({ description: '', amount: 0 })
    .then(() => {
      dispatch({ type: ADD_EMPTY_ENTRY });
      // dispatch(dispatch(fetchEntries()));
    });
};

export const setCurrentEntry = entry => {
  return {
    type: SET_CURRENT_ENTRY,
    payload: entry
  };
};
