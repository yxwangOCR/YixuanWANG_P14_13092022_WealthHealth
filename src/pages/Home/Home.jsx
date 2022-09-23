import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <Logo />
        <Link to="/employee-list" className="view-employee-link">
          <button>View Current Employee</button>
        </Link>
      </div>

      <Form />
    </div>
  );
}

export default Home;
