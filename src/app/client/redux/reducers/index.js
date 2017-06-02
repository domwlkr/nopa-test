import {combineReducers} from 'redux';
import bankReducer from './bankReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  bankReducer,
  formReducer
});

export default rootReducer;
