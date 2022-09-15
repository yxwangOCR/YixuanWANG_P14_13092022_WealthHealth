import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function CountrySelectorCustom() {
  const { register } = useForm();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const data = require("./CountryName.json");
    console.log(data);
    setCountries(data);
  }, []);

  return (
    <div>
      <select {...register("country")}>
        <option value="">-Select Country-</option>
        {countries.map((item) => {
          return <option key={item.country}>{item.country}</option>;
        })}
      </select>
    </div>
  );
}

export default CountrySelectorCustom;
