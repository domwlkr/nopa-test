import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

const INITIAL_STATE = { bank: {} };

export default function bankReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.BANK_SELECT:
      return Object.assign({}, state, { bank: action.payload });
    default:
      return state;
  }
}
