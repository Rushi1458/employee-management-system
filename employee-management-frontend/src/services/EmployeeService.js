import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const getEmployees = () => axios.get(API);

export const getEmployee = (id) => axios.get(`${API}/${id}`);

export const createEmployee = (employee) =>
  axios.post(API, employee);

export const updateEmployee = (id, employee) =>
  axios.put(`${API}/${id}`, employee);

export const deleteEmployee = (id) =>
  axios.delete(`${API}/${id}`);