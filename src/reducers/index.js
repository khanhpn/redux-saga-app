import { combineReducers } from 'redux';
import task from './task';
import ui from './ui';
import modal from './modal';
import { reducer as formReducer } from 'redux-form';

const rootReducers = combineReducers({
  task,
  ui,
  modal,
  form: formReducer
});

export default rootReducers;
