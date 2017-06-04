import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function transactionReducer(state = initialState.form, action) {
  switch(action.type) {
    case types.FORM_SUBMIT_SUCCESS:
      return {
        loggedIn: true,
        formValues: action.formValues
      };
    case types.LOGOUT_SUCCESS:
      return {
        loggedIn: false,
        formValues: {}
      };
    default:
      return state;
  }
}
