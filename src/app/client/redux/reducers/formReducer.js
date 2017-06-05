import * as types from '../actions/actionTypes';

const INITIAL_STATE = { form: { formData: {}, loggedIn: false, errors: {} } };

export default function formReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.FORM_SUBMIT_SUCCESS:
      return Object.assign({}, state, {
        form: {
          formData: action.payload,
          loggedIn: true
        }
      });
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        form:{
          loggedIn: false,
          formValues: {}
        }
      });
    default:
      return state;
  }
}
