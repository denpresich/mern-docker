const todoModal = require('../models/todo')

async function createTodo({ title }) {
  const todo = await todoModal.create({ title })

  return todo
}

async function updateTodo(id, { title }) {
  const todo = await todoModal.findByIdAndUpdate(id, { title })

  return todo
}

async function deleteTodo(id) {
  const todo = await todoModal.findByIdAndDelete(id)

  return todo.id
}

async function getTodos() {
  const todos = await todoModal.find()

  return todos
}

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodos
}