import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    let [value, setvalue] = useState("")
    let handlechange = (e)=>{
        setvalue(e.target.value)
        // console.log(e.target.value)
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        addTodo(value);
        setvalue("")
        // console.log(value.trim())
    }
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>
        <input type="text" className='todo-input' value={value} placeholder='what is the task todayyyyyy??' onChange={handlechange} />
        <button className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm