import './TodosList.css'

import React from 'react'

import Todo from './Todo'

export default function TodosList({ todos }) {
  return (
    <div className="todos-list">
      {todos.map(todo => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  )
}