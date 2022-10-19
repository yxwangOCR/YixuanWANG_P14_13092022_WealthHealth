import React, { createContext, useState } from "react";

export const Context = createContext();
//use createContext function to create a context,
//then export it to use in the rest of APP 

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const value = {
    data,
    setData,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

//context provider to wrap the component tree 
//to access to the information in the context
//All children have access to the value 

export default Context;
// Create Context and export a Provider
