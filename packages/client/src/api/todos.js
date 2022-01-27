import Axios from 'axios'

export const createTodo = todo =>
  Axios.post('/api/todos', todo)
    .then(response => response.data)

export const deleteTodo = id =>
  Axios.delete(`/api/todos/${id}`)
    .then(response => response.data)

export const getTodos = () =>
  Axios.get('/api/todos')
    .then(response => response.data)