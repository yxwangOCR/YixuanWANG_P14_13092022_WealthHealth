import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>HRnet</h1>
      <Link to="/employee-list" className="view-employee-link">
        View Current Employee
      </Link>
      <h2>Create Employee</h2>
      <Form />
    </div>
  );
}

export default Home;
