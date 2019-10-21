import * as taskConstants from '../constants/task';

const initialState = {
  listTasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return { ...state, listTasks: [] }
    case taskConstants.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data
      }
    case taskConstants.FETCH_TASK_FAILED:
      return {...state}
    default:
      return state;
  }
}

export default reducer;
