import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);
 
  const value = {
    data,
    setData,
  }


  return <Context.Provider value={value}>{children}</Context.Provider>
}


export default Context
// Create Context and export a Provider