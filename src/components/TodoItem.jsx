import React from 'react'

function TodoItem({ todo, setTodos }) {

  const changeStatus = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>{
        if(id == todo.id){
          return {...todo, complited: !todo.complited}
        }else{
          return todo
        }
      })
    })
  }

  const deletTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id)
    })
  }
  return (
    <><li key={todo.id} className={`${todo.complited ? "complited" : ""}`}>
      <h1>{todo.title}</h1>
      {!todo.complited && <button onClick={() => changeStatus(todo.id)}>qilish</button>}
      {todo.complited && <button onClick={() => changeStatus(todo.id)}>qaytarish</button>}
      <button onClick={() => deletTodo(todo.id)}>Delet</button>
    </li></>
  )
}

export default TodoItem