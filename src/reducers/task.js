import * as taskConstants from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return { ...state, listTasks: [] }
    case taskConstants.FETCH_TASK_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        listTasks: data
      }
    case taskConstants.FETCH_TASK_FAILED:
      const error = action.payload;
      toastError(error);
      return {...state}
    default:
      return state;
  }
}

export default reducer;
