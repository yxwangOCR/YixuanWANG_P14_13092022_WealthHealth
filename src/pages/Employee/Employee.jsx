import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";

function Employee() {
  return (
    <div>
      <h1>Current Employees</h1>
      <Table />
      <Link to="/" className="view-home-link">
        Home
      </Link>
    </div>
  );
}

export default Employee;
