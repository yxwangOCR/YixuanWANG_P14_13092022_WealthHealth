import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import "./CountrySelectorCustom.css";

function CountrySelectorCustom() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const data = require("./CountryName.json");
    setCountries(data);
  }, []);

  return (
    <div className="country-list">
      <select {...register("country", { required: "Country is required" })}>
        <option value="">- Select Country -</option>
        {countries.map((item) => {
          return <option key={item.country}>{item.country}</option>;
        })}
      </select>
      <p className="error-message">{errors.country?.message}</p>
    </div>
  );
}

export default CountrySelectorCustom;
