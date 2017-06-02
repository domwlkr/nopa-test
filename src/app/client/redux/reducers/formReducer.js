import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function formReducer(state = initialState.form, action) {
  switch(action.type) {
    case types.FORM_SUBMIT:
      return [
        ...state,
        Object.assign({}, action.form)
      ];
    default:
      return state;
  }
}
