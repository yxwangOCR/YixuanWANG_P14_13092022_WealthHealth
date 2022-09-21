import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import "./CountrySelectorCustom.css"

function CountrySelectorCustom() {
  const methods = useFormContext();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const data = require("./CountryName.json");
    //console.log(data);
    setCountries(data);
  }, []);

  return (
    <div className="country-list">
      <select {...methods.register("country")} > 
        <option value="">-Select Country-</option>
        {countries.map((item) => {
          return <option key={item.country}>{item.country}</option>;
        })}
      </select>
    </div>
  );
}

export default CountrySelectorCustom;
