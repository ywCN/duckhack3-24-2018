import axios from 'axios';
import {
  LOGIN_SUCCESS,
  SET_USER_INFO,
  LOGIN_FAIL,
  LOG_OUT,
  FETCH_ENTRIES,
  ADD_ENTRY,
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
