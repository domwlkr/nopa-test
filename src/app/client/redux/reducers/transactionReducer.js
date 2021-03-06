import * as types from '../actions/actionTypes';

const INITIAL_STATE = { transactions: [], loading: false, error: null };

export default function transactionReducer(state = INITIAL_STATE, action) {
  let error;

  switch(action.type) {
    case types.GET_TRANSACTIONS:
      return Object.assign({}, state, {
        transactions:[],
        error: null,
        loading: true
      });
    case types.GET_TRANSACTIONS_SUCCESS:
      return Object.assign({}, state, {
        transactions: action.payload,
        error: null,
        loading: false
      });
    case types.GET_TRANSACTIONS_FAIL:
      return Object.assign({}, state, {
        transactions: action.payload,
        error: null,
        loading: false
      });
    default:
      return state;
  }
}
