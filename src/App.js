
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";



const App = () =>{
  return (
    <div className="App">
 
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employee-list" element={<Employee />} />
        </Routes>
    
    </div>
  );
}

export default App;
