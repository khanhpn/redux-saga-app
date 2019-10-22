import { fork } from 'redux-saga/effects';

function* watchFetchListTaskAction() {
  console.log('watching list task');
}

function* watchCreateTaskAction() {
  console.log('watching create task');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
