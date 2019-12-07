import { fork, take, call, put, delay, takeLatest, select } from 'redux-saga/effects';
import * as taskTypes from '../constants/task';
import * as employeeTypes from '../constants/employee';
import { showLoading, hideLoading } from '../actions/ui';
import { getList } from '../apis/task';
import { getEmployees } from '../apis/employees';
import { STATUS_CODE } from '../constants';
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess } from '../actions/task';
import { fetchEmployeesSuccess, fetchEmployeesFailed } from '../actions/employee';

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
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const lists = yield select(state => state.task.listTasks);
  let filteredTasks = '';
  if (keyword !== '') {
    filteredTasks = lists.filter(item =>
      item.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
    );
  } else {
    filteredTasks = lists;
  }
  yield put(filterTaskSuccess(filteredTasks));
}

function* watchFetchListEmployeeAction() {
  const response = yield call(getEmployees);
  const { status, data } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchEmployeesSuccess(data));
  } else {
    yield put(fetchEmployeesFailed(data));
  }
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga)
  yield takeLatest(employeeTypes.FETCH_EMPLOYEES, watchFetchListEmployeeAction);
}

export default rootSaga;
