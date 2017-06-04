import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function bankReducer(state = initialState.bank, action) {
  switch(action.type) {
    case types.BANK_SELECT:
      return {
        bank: action.bank
      };
    default:
      return state;
  }
}
