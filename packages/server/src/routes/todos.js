const express = require('express')

const { createTodo, updateTodo, deleteTodo, getTodos } = require('../services/todos')

const router = express.Router()

router.route('/')
  .post((req, res, next) => {
    createTodo(req.body)
      .then(todo => res.send(todo))
      .catch(err => next(err))
  })
  .get((_, res, next) => {
    getTodos()
      .then(todos => res.send(todos))
      .catch(err => next(err))
  })

router.route('/:id')
  .put((req, res, next) => {
    updateTodo(req.params.id, req.body)
      .then(todo => res.send(todo))
      .catch(err => next(err))
  })
  .delete((req, res, next) => {
    deleteTodo(req.params.id)
      .then(id => res.send(id))
      .catch(err => next(err))
  })

module.exports = router