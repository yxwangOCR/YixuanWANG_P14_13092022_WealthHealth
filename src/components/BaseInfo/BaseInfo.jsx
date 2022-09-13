import React from "react";
import { useFormContext } from "react-hook-form";
import "./BaseInfo.css";

function BaseInfo() {
  const methods = useFormContext();
  return (
    <div className="basic-info-container">
      <label>First Name: </label>
      <input type="text" {...methods.register("firstName")} />

      <label>Last Name: </label>
      <input type="text" {...methods.register("lastName")} />

      <label>Date of Birth: </label>
      <input type="date" {...methods.register("birthday")} />

      <label>Start Date: </label>
      <input type="date" {...methods.register("startDate")} />
    </div>
  );
}

export default BaseInfo;
