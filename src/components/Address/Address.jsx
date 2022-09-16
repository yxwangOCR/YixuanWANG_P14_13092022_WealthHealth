import React from "react";
import "./Address.css";
import { useFormContext } from "react-hook-form";
import CountrySelector from "../CountrySelector/CountrySelector";
import CountrySelectorController from "../CountrySelector/CountrySelectorController";
import CountrySelectorCustom from "../CountrySelectorCustom/CountrySelectorCustom";
//import Mui from "../CountrySelectorMui/Mui";

function Address({ control }) {
  const methods = useFormContext();

  return (
    <fieldset className="address-container">
      <legend>Address</legend>

      <label>Street: </label>
      <input type="text" {...methods.register("street")} />

      <label>City: </label>
      <input type="text" {...methods.register("city")} />

      <label>
        Country Selector Test 1 : Custom component by react-select-country-list
        library:{" "}
      </label>
      <span {...methods.register("country")}>
        {" "}
        <CountrySelector />
      </span>
      <label>
        Country Test 2 : Custom component wrapped by controller of
        react-hook-form:{" "}
      </label>
      <span {...methods.register("country")}>
        <CountrySelectorController />
      </span>

      <label>Country Test 3 : Custom component by fetching data: </label>
      <CountrySelectorCustom />

      <label>
        Country Test 4 : Custom component by MUI (with Warning for formState &
        fieldState):{" "}
      </label>
      {/*<Mui control={control} />*/}

      <label>Zip Code: </label>
      <input {...methods.register("zipCode")} />
    </fieldset>
  );
}

export default Address;

//Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//UseController :  https://react-hook-form.com/api/usecontroller#main
