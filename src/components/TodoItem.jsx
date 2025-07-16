import React, { useState } from 'react'

export default function TodoItem({ task, index, deleteTask, updateTask, updateCompleted }) {
  const [isUpdate, setIsUpdate] = useState(false)
  const [newTask, setNewTask] = useState(task.name)
  return (

    isUpdate ? <div className='tasksDiv'>
      <input style={{border:'1px solid gray',borderRadius:'10px',outline:'none'}} type='text' value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
      <button style={{ backgroundColor: 'green' }} onClick={() => { updateTask(index, { name: newTask, completed: false }), setIsUpdate(false) }}>✅ Save</button>
    </div>
      : <div className='tasksDiv'>
        <p>{task.name}</p>
        <button onClick={() => { deleteTask(index) }}>X</button>
        <button onClick={() => { setIsUpdate(true) }}>✏️</button>
        <input style={{gridColumn:'span 1'}}type='checkbox' checked={task.completed} onChange={() => { updateCompleted(index, { name: newTask, completed: !task.completed }) }} />
      </div>
  )
}
