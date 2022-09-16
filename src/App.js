
import './App.css';
import { Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";

createStore({});

const App = () =>{
  return (
    <div className="App">
   <StateMachineProvider>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employee-list" element={<Employee />} />
        </Routes>
        </StateMachineProvider>
    </div>
  );
}

export default App;
