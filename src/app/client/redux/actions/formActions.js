import * as types from './actionTypes';

export const formSubmitSuccess = (formValues) => ({
    type: types.FORM_SUBMIT_SUCCESS,
    loggedIn: true,
    formValues
});

export const formSubmitFail = () => ({
    type: types.FORM_SUBMIT_FAIL,
    loggedIn: false
});

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
    loggedIn: false
});