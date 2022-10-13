import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Employee from "./pages/Employee/Employee";
import { Provider } from "./hooks/createContext";

const App = () => {
  return (
    <div className="App">
      <Provider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="employee-list" element={<Employee />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
