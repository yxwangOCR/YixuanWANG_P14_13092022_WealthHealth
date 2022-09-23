import React, { useEffect, useState } from "react";
import "./Form.css";
import { useForm, FormProvider } from "react-hook-form";
import BaseInfo from "../BaseInfo/BaseInfo";
import Address from "../Address/Address";
import Department from "../Department/Department";
import { Popup } from "p14-popup";
import "../../lib/Popup.css";
import useEmployee from "../../hooks/useEmployee";
import { Link } from "react-router-dom";

function Form() {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  const {
    getValues,
    setError,
    clearErrors,
    formState: { errors },
    watch,
    reset,
  } = methods;
  const [buttonPopup, setButtonPopup] = useState(false);
  const { setData } = useEmployee();

  console.log(errors);

  console.log(watch());

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => console.log(data))}
          className="form-container"
        >
          <BaseInfo errors={errors} />
          <Address errors={errors} />
          <Department errors={errors} />

          <div className="buttons">
            <button
              type="button"
              className="submit-btn"
              onClick={() => {
                setData(getValues());
                setButtonPopup(true);
                setError();
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="reset-btn"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </FormProvider>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <Link to="/employee-list" className="view-employee-link">
          <button>
            <h1>Success!</h1>View Employee List
          </button>
        </Link>
      </Popup>
    </>
  );
}

export default Form;
