import React, { useEffect } from 'react'
import "./App.css"
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import { useTheme } from './ThemeProvider'


export default function App() {

  const [taskList, setTaskList] = useState(() => {
    const storedtasks = localStorage.getItem('tasks')
    return storedtasks ? JSON.parse(storedtasks):[]
  })
  const [taskName, setTaskName] = useState('')
  const [filter, setFilter] = useState('All')
  const {darkMode}=useTheme()

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])


  useEffect

  const filteredList = () => {
    if (filter == 'All') {
      return taskList
    }
    else if (filter == 'Completed') {
      return taskList.filter((task) => task.completed == true)
    }
    else {
      return taskList.filter((task) => task.completed == false)
    }
  }

  const filteredTasks = filteredList()

  const deleteTask = (deleteIndex) => {
    const updateList = taskList.filter((task, index) => deleteIndex != index)
    setTaskList(updateList)
  }

  const updateTask = (updateIndex, newTask) => {
    const updateList = [...taskList]
    updateList[updateIndex] = newTask
    setTaskList(updateList)
  }

  console.log(taskList)

  const handleTask = (e) => {
    e.preventDefault()
    setTaskList([...taskList,
    {
      name: taskName,
      completed: false
    }
    ])
    setTaskName('')
  }

  const updateCompleted = (index, updateTask) => {
    const updateList = [...taskList]
    updateList[index] = updateTask
    setTaskList(updateList)
  }

  return (
    <div className={`wrapper ${darkMode?'dark':'light'}`}>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} taskName={taskName} setTaskName={setTaskName} handleTask={handleTask} />
      <Filter setFilter={setFilter} />
      <TodoList taskList={filteredTasks} deleteTask={deleteTask} updateTask={updateTask} updateCompleted={updateCompleted} />
    </div>
  )
}
