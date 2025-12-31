import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    let [value, setvalue] = useState(task.task)
    let handlechange = (e)=>{
        setvalue(e.target.value)
        // console.log(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        editTodo(value, task.id);
        setvalue("")
        // console.log(value.trim())
    }
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>
        <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={handlechange} />
        <button className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm