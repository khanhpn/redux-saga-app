import * as typeEmployee from '../constants/employee';

export const fetchEmployees = () => ({
  type: typeEmployee.FETCH_EMPLOYEES
});

export const fetchEmployeesFailed = error => ({
  type: typeEmployee.FETCH_EMPLOYEES_FAILED,
  payload: error
});

export const fetchEmployeesSuccess = data => ({
  type: typeEmployee.FETCH_EMPLOYEES_SUCCESS,
  payload: data
});
