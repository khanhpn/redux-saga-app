import axiosService from '../commons/axiosService';
import { API_EMPLOYEE } from '../constants/employee';

export const getEmployees = () => {
  return axiosService.get(`${API_EMPLOYEE}employees`);
}
