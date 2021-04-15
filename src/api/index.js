import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const createTodo = data => httpClient.post('/todos', data)
export const getTodo = () => httpClient.get('/todos')
export const updateTodo = ({ data, id }) => httpClient.patch(`/todos/${id}`, data)
export const deleteTodo = ({ id }) => httpClient.delete(`/todos/${id}`)
