import * as types from './actionTypes';

export function bankSelect(bank) {
  return {
    type: types.BANK_SELECT,
    payload: bank
  };
}