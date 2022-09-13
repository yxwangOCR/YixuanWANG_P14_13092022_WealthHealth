import React from "react";
import { Link } from "react-router-dom";

function Employee() {
  return (
    <div>
      <h1>Current Employees</h1>
      <Link to="/" className="view-home-link">
        Home
      </Link>
    </div>
  );
}

export default Employee;
