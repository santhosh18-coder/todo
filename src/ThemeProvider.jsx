import { createContext, useState,useContext} from "react";

const ThemeContext = createContext()

import React from 'react'

export default function ThemeProvider({ children }) {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}


export const useTheme=()=>useContext(ThemeContext)