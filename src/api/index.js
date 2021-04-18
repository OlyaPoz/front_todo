import axios from 'axios';

const http = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export const getTodos = () =>
  http.get(`/todo`);

export const createTodo = (todoData) =>
  http.post(`/todo`, todoData);

export const deleteTodo = ({ id } = {}) =>
  http.delete(`/todo/${id}`);

export default http;