import './AddTodo.css'

import React from 'react'
import { useQueryClient, useMutation } from 'react-query'

import { createTodo } from '../api/todos'

const initialValues = { title: '' }

export default function AddTodo() {
  const [values, setValues] = React.useState(initialValues)

  const queryClient = useQueryClient()
  const createTodoMutation = useMutation(createTodo, {
    onSuccess: todo => {
      queryClient.setQueryData('todos', todos => [...todos, todo])
      setValues(initialValues)
    }
  })

  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault()
      createTodoMutation.mutate(values)
    },
    [values, createTodoMutation]
  )

  const handleChange = React.useCallback(
    event => setValues(values => ({ ...values, [event.target.name]: event.target.value })),
    [setValues]
  )

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input type="text" name="title" placeholder="Enter todo" value={values.title} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}