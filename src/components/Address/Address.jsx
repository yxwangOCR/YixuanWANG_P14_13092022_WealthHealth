import React from "react";
import { useFormContext } from "react-hook-form";
import CountrySelector from "../CountrySelector/CountrySelector";
import "./Address.css";

function Address() {
  const methods = useFormContext();

  return (
    <fieldset className="address-container">
      <legend>Address</legend>
      <label>Street: </label>
      <input type="text" {...methods.register("street")} />

      <label>City: </label>
      <input type="text" {...methods.register("city")} />

      <label>State: </label>
      <CountrySelector {...methods.register("country")} />

      <label>Zip Code: </label>
      <input {...methods.register("zipCode")} />
    </fieldset>
  );
}

export default Address;
