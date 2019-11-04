import { combineReducers } from 'redux';
import task from './task';
import ui from './ui';
import modal from './modal';

const rootReducers = combineReducers({
  task,
  ui,
  modal,
});

export default rootReducers;
