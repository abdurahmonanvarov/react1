import React from 'react'
import TodoItem from './TodoItem'


function TodoList({todos, setTodos}) {
  return (
   
    <ul className='Wrapper'>{todos.map((todo) => {
      return  <TodoItem key={todo.id} todo={todo} setTodos={setTodos}/>
    })}</ul>
  )
}

export default TodoList
// <TodoItem/>