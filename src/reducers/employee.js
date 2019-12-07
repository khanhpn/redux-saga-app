import * as employeeConstants from '../constants/employee';

const initialState = {
  listEmployees: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case employeeConstants.FETCH_EMPLOYEES:
      return { ...state, listEmployees: [] }
    case employeeConstants.FETCH_EMPLOYEES_SUCCESS:
      const data = action.payload;
      return {
        ...state,
        listEmployees: data
      }
    case employeeConstants.FETCH_EMPLOYEES_FAILED:
      const error = action.payload;
      debugger
      return { ...state }
    default:
      return state;
  }
}

export default reducer;
