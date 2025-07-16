import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ taskList, deleteTask, updateTask , updateCompleted }) {
    return (
        <div className='taskList'>
            {taskList.map((task, index) =>
                <TodoItem task={task} key={index} index={index} deleteTask={deleteTask} updateTask={updateTask} updateCompleted={updateCompleted} />
            )}
        </div>
    )
}
