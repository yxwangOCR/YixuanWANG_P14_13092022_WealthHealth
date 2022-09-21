import { useContext } from 'react'

import employeeContext from './createContext'

const useEmployee = () => {
  const { data, setData } = useContext(employeeContext)



  // EXAMPLE
  /*
  const addEmployee = (firstname, name) => {
    setData([...data, { firstname, name})
  }
     */




  return {
    data,
    setData
  }
}

export default useEmployee
