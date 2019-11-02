import { fork, take, call, put, delay } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import { showLoading, hideLoading } from '../actions/ui';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../constants';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const response = yield call(getList);
    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  console.log('watching create task');
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;
