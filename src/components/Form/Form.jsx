import React, { useState } from "react";
import "./Form.css";
import { useForm, FormProvider } from "react-hook-form";
import BaseInfo from "../BaseInfo/BaseInfo";
import Address from "../Address/Address";
import Department from "../Department/Department";
import { Popup } from "p14-popup";
import '../../lib/Popup.css'

function Form() {
  const methods = useForm();
  const { getValues, handleSubmit } = methods;
  const getData = () => {
    const values = getValues();
    console.log(values);
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="form-container"
        >
          <BaseInfo />
          <Address />
          <Department />

          <button
            type="button"
            className="submit-btn"
            onClick={() => {
              getData();
              console.log("====");
              setButtonPopup(true);
            }}
          >
            Save
          </button>
        </form>
      </FormProvider>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Success! </h1>
        <p>Employee Created!</p>
      </Popup>
    </>
  );
}

export default Form;
