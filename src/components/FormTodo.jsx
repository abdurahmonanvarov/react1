import React from 'react'
import { useState } from 'react'

function FormTodo({addTodo}) {

  const [title, setTitle] = useState("")

  
  const formSubmit = (e) => {
    e.preventDefault()
    if(!title.trim()){
      alert('forrmani toldir')
      return
    }
    addTodo({
      title: title,
      complited: false,
      id: Math.random(),
    })
    setTitle("")
  }
  console.log(title)
  return (
    <form className='form' onSubmit={formSubmit}>
      <label className='label'>
        <span>Title:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
        <button>Submit</button>
      </label>
    </form>
  )
}

export default FormTodo