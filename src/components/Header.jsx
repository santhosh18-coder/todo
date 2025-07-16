import React from 'react'
import { useTheme } from '../ThemeProvider'


export default function Header() {
  const {darkMode,toggleDarkMode}=useTheme()


  console.log(darkMode)
  return (
    <header className='header'>
      <h1>Advanced Todo</h1>
      <button onClick={toggleDarkMode}>{darkMode?'☀️ Light Mode':'🌙 Dark Mode'}</button>
    </header>
  )
}
