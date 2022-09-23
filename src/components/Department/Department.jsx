import React from "react";
import { useFormContext } from "react-hook-form";
import "./Department.css";

function Department() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select
        {...register("department", { required: "Department is required" })}
        className="department-list"
      >
        <option value="">- Select Department -</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Legal">Legal</option>
      </select>

      <p className="department-error">{errors.department?.message}</p>
    </>
  );
}

export default Department;
