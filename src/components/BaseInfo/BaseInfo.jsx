import React from "react";
import { useFormContext } from "react-hook-form";
import "./BaseInfo.css";

// Error message does not work.

function BaseInfo() {
  const methods = useFormContext();
  const {
    formState: { errors },
  } = methods;

  return (
    <div className="basic-info-container">
      <h2>Create Employee</h2>
      <div className="basic-info-item">
        <label>First Name</label>
        <input
          type="text"
          {...methods.register("firstName", {
            required: "First name is required",
          })}
        />
        {errors.firstName?.message}

        <label>Last Name</label>
        <input
          type="text"
          {...methods.register("lastName", {
            required: "Last name is required",
          })}
        />
        {errors.lastName?.message}

        <label>Date of Birth</label>
        <input
          type="date"
          {...methods.register("birthday", {
            required: "Birthday is required",
          })}
        />
        <p>{errors.birthday?.message}</p>

        <label>Start Date</label>
        <input
          type="date"
          {...methods.register("startDate", {
            required: "Start date is required",
          })}
        />
        <p>{errors.startDate?.message}</p>
      </div>
    </div>
  );
}

export default BaseInfo;

//Read : https://react-hook-form.com/api/useform/seterror
