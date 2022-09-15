import React from "react";
import { Controller } from "react-hook-form";
import CountrySelector from "./CountrySelector";

function CountrySelectorController({ control }) {
  return (
    <Controller
      render={(props) => (
        <CountrySelector
          {...props}
          onChange={(value) => props.onChange(value)}
        />
      )}
      name="country"
      control={control}
    />
  );
}

export default CountrySelectorController;

//https://github.com/react-hook-form/react-hook-form/discussions/2235
//https://react-hook-form.com/api/usecontroller/controller
