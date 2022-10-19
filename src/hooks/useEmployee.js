import { useContext } from "react";

import employeeContext from "./createContext";

const useEmployee = () => {
  const { data, setData } = useContext(employeeContext);
  // grab employeeContext and data variable that we are passing through context provider  

  const addEmployee = (employee) => {
    setData([...data, employee]);
  };

  return {
    data,
    setData,
    addEmployee,
  };
};

export default useEmployee;

// Pass in employeeContext to this useContext and it's going to give us the value from that employeeContext in our case
