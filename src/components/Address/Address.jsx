import React from "react";
import "./Address.css";
import { useFormContext } from "react-hook-form";
import CountrySelectorCustom from "../CountrySelectorCustom/CountrySelectorCustom";

function Address() {
  const methods = useFormContext();

  return (
    <fieldset className="address-container">
      <legend>Address</legend>

      <label>Street: </label>
      <input type="text" {...methods.register("street")} />

      <label>City: </label>
      <input type="text" {...methods.register("city")} />

      <label>Country:</label>
      <CountrySelectorCustom />

      <label>Zip Code: </label>
      <input {...methods.register("zipCode")} />
    </fieldset>
  );
}

export default Address;

//Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//UseController :  https://react-hook-form.com/api/usecontroller#main
