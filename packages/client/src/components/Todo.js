import './Todo.css'

import React from 'react'
import { useQueryClient, useMutation } from 'react-query'

import { deleteTodo } from '../api/todos'

export default function Todo({ todo }) {
  const queryClient = useQueryClient()

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: id => queryClient.setQueryData('todos', todos => todos.filter(todo => todo._id !== id))
  })

  const handleTodoDelete = React.useCallback(
    () => deleteTodoMutation.mutate(todo._id),
    [todo._id, deleteTodoMutation]
  )

  return (
    <div className="todo">
      <div className="todo-title">{todo.title}</div>
      <button onClick={handleTodoDelete}>Delete</button>
    </div>
  )
}