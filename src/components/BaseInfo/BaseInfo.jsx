import React from "react";
import { useFormContext } from "react-hook-form";
import "./BaseInfo.css";

function BaseInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="basic-info-container">
      <h2>Create Employee</h2>
      <div className="basic-info-item">
        <label>First Name</label>
        <input
          type="text"
          {...register("firstName", {
            required: "First name is required",
          })}
        />
        <p className="error-message">{errors.firstName?.message}</p>

        <label>Last Name</label>
        <input
          type="text"
          {...register("lastName", {
            required: "Last name is required",
          })}
        />
        <p className="error-message">{errors.lastName?.message}</p>

        <label>Date of Birth</label>
        <input type="date" {...register("birthday")} />

        <label>Start Date</label>
        <input type="date" {...register("startDate")} />
      </div>
    </div>
  );
}

export default BaseInfo;

//Read : https://react-hook-form.com/api/useform/seterror
