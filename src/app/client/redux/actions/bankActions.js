import * as types from './actionTypes';

export const bankSelect = (bank) => ({
    type: types.BANK_SELECT,
    bank
});