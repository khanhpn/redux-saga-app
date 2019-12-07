import { combineReducers } from 'redux';
import task from './task';
import ui from './ui';
import modal from './modal';
import { reducer as formReducer } from 'redux-form';
import employee from './employee';
const rootReducers = combineReducers({
  task,
  ui,
  modal,
  form: formReducer,
  employee
});

export default rootReducers;
