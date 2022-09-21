import React from "react";
import { useFormContext } from "react-hook-form";
import "./Department.css";

function Department() {
  const methods = useFormContext();

  return (
    <select {...methods.register("department")} className="department-list">
      <option value="">-Select Department-</option>
      <option value="sales">Sales</option>
      <option value="marketing">Marketing</option>
      <option value="engineering">Engineering</option>
      <option value="hr">Human Resources</option>
      <option value="legal">Legal</option>
    </select>
  );
}

export default Department;
