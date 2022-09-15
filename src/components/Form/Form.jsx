import React from "react";
import "./Form.css";
import { useForm, FormProvider } from "react-hook-form";
import BaseInfo from "../BaseInfo/BaseInfo";
import Address from "../Address/Address";
import Department from "../Department/Department";

function Form() {
  const methods = useForm();
  const { handleSubmit, getValues } = methods;
  const data = []

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="form-container"
      >
        <BaseInfo />
        <Address />
        <Department />
        {/*<input type="submit" value="Save" className="submit-btn" />*/}

        <button
          type="button"
          className="submit-btn"
          onClick={() => {
            const values = getValues();
            const multipleValues = getValues([
              "firstName",
              "lastName",
              "birthday",
              "startDate",
              "street",
              "city",
              "country",
              "zipCode",
            ]);
            console.log(multipleValues);
            console.log(values);
          }}
        >
          Save
        </button>
      </form>
    </FormProvider>
  );
}

export default Form;
