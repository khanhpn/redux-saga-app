import { combineReducers } from 'redux';
import task from './task';
import ui from './ui';

const rootReducers = combineReducers({
  task,
  ui
});

export default rootReducers;
