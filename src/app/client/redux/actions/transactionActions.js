import * as types from './actionTypes';
import axios from 'axios';

export function getTransactions() {
  const url = 'http://localhost:3000/api/transactions';
  const request = axios.get(url);

  return {
    type: types.GET_TRANSACTIONS,
    payload: request
  };
}

export function getTransactionsSuccess(transactions) {
  return {
    type: types.GET_TRANSACTIONS_SUCCESS,
    payload: transactions
  };
}

export function getTransactionsFail(error) {
  return {
    type: types.GET_TRANSACTIONS_FAIL,
    payload: error
  };
}