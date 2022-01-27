import './Todos.css'

import React from 'react'

import { useQuery } from 'react-query'

import { getTodos } from '../api/todos'

import AddTodo from './AddTodo'
import TodosList from './TodosList'

export default function Todos() {
  const { data: todos = [], isLoading } = useQuery('todos', getTodos)

  return (
    <div className="todos">
      <AddTodo />
      {isLoading
        ? <div>Loading...</div>
        : <TodosList todos={todos} />
      }
    </div>
  )
}