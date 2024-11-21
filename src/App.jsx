import FormTodo from './components/FormTodo'
import TodoList from './components/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      complited: false,
      title: "Cleen room"
    }
  ])
  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo]
    })
    
  }

  return (
    <div className='cower'>
      <FormTodo addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
