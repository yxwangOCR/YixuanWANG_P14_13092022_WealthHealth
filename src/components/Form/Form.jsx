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
    formState: { errors },
    reset,
  } = methods;
  const [buttonPopup, setButtonPopup] = useState(false);
  const { addEmployee } = useEmployee();

  const onSubmit = (values) => {
    addEmployee(values);
    setButtonPopup(true);
  }

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="form-container"
        >
          <BaseInfo errors={errors} />
          <Address errors={errors} />
          <Department errors={errors} />

          <div className="buttons">
            <button
              type="submit"
              className="submit-btn"
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
