import axios from 'axios';
import {
  LOGIN_SUCCESS,
  SET_USER_INFO,
  LOGIN_FAIL,
  FETCH_ENTRIES,
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  SET_CURRENT_ENTRY
} from './types';

export const loginSuccess = (user, redirect) => dispatch => {
  dispatch({ type: LOGIN_SUCCESS });
  dispatch({ type: SET_USER_INFO, payload: user });
  redirect();
};
