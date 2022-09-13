import React from "react";
import "./Form.css";
import { useForm, FormProvider } from "react-hook-form";
import BaseInfo from "../BaseInfo/BaseInfo";
import Address from "../Address/Address";
import Department from "../Department/Department";

function Form() {
  const methods = useForm();
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="form-container"
      >
        <BaseInfo />
        <Address />
        <Department />
        <input type="submit" value="Save" className="submit-btn"/>
      </form>
    </FormProvider>
  );
}

export default Form;
