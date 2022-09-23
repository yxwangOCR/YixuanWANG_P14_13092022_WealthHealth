import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Table from "../../components/Table/Table";
import "./Employee.css";

function Employee() {
  return (
    <>
      <div className="header">
        <Logo />
        <Link to="/" className="view-home-link">
          <button>Home</button>
        </Link>
      </div>
      <Table />
    </>
  );
}

export default Employee;
