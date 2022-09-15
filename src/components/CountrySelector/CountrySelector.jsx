import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "./CountrySelector.css";

function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    setValue(value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}

export default CountrySelector;

//react-select-country-list + react-hook-form hint : https://stackoverflow.com/questions/68350169/register-values-with-useform-and-react-select-country-list

//react-select-country-list: https://www.npmjs.com/package/react-select-country-list
