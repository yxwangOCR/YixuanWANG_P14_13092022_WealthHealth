import React from "react";
import "./Address.css";
import { useFormContext } from "react-hook-form";
import CountrySelectorCustom from "../CountrySelectorCustom/CountrySelectorCustom";

function Address() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <fieldset className="address-container">
      <legend>Address</legend>

      <label>Street: </label>
      <input
        type="text"
        {...register("street", { required: "Street is required" })}
      />
      <p className="error-message">{errors.street?.message}</p>

      <label>City: </label>
      <input
        type="text"
        {...register("city", { required: "City is required" })}
      />
      <p className="error-message">{errors.city?.message}</p>

      <label>Country:</label>
      <CountrySelectorCustom errors={errors} />

      <label>Zip Code: </label>
      <input {...register("zipCode", { required: "Zip Code is required" })} />
      <p className="error-message">{errors.zipCode?.message}</p>
    </fieldset>
  );
}

export default Address;

//Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//UseController :  https://react-hook-form.com/api/usecontroller#main
