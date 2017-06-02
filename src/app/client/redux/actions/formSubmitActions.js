import * as types from './actionTypes';

export const formSubmitSuccess = (formValues) => ({
    type: types.FORM_SUBMIT_SUCCESS,
    loggedIn: true,
    formValues
});