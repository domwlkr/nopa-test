import {combineReducers} from 'redux';
import bankReducer from './bankReducer';
import formReducer from './formReducer';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  bankReducer,
  formReducer,
  transactionReducer
});

export default rootReducer;
