import * as types from './actionTypes';

export function formSubmitSuccess(formValues) {
  return {
    type: types.FORM_SUBMIT_SUCCESS,
    loggedIn: true,
    payload: formValues
  };
}

export function formSubmitFail() {
  return {
    type: types.FORM_SUBMIT_FAIL,
    loggedIn: false
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
    loggedIn: false
  };
}