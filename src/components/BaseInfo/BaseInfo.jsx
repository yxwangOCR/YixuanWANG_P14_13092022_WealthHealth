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
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          {...register("firstName", {
            required: "First name is required",
          })}
        />
        <p className="error-message">{errors.firstName?.message}</p>

        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          {...register("lastName", {
            required: "Last name is required",
          })}
        />
        <p className="error-message">{errors.lastName?.message}</p>

        <label htmlFor="birthday">Date of Birth</label>
        <input id="birthday" type="date" {...register("birthday")} />

        <label htmlFor="start">Start Date</label>
        <input id="start" type="date" {...register("startDate")} />
      </div>
    </div>
  );
}

export default BaseInfo;

//Read : https://react-hook-form.com/api/useform/seterror
