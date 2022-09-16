import React from "react";
import "./Form.css";
import { useForm, FormProvider } from "react-hook-form";
import BaseInfo from "../BaseInfo/BaseInfo";
import Address from "../Address/Address";
import Department from "../Department/Department";
//import Table from "../Table/Table";

function Form() {
  const methods = useForm();
  const { getValues, handleSubmit } = methods;
  const getData = () => {
    const values = getValues();
    console.log(values);
  };

  
  return (
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
          }}
        >
          Save
        </button>
      </form>
    </FormProvider>
  );
}

export default Form;
