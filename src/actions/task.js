import * as taskApi from '../apis/task';
import * as taskConstants from '../constants/task';

export const fetchListTasksRequest = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApi.getList().then(data => {
      dispatch(fetchListTaskSuccess(data));
    }).catch(error => {
      dispatch(fetchListTaskFailed(error));
    })
  }
}

export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK
  }
}

export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: data
  }
}

export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error
    }
  }
}
