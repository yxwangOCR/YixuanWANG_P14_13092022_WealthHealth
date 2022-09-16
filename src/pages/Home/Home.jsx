import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./Home.css";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../updateAction";
import { useForm } from "react-hook-form";

function Home(props) {
  const { handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("../Employee/Employee");
  };

  return (
    <div className="home-container">
      <h1>HRnet</h1>
      <Link to="/employee-list" className="view-employee-link">
        View Current Employee
      </Link>
      <h2>Create Employee</h2>
      <Form onSubmit={handleSubmit(onSubmit)} defaultValue={state} />
    </div>
  );
}

export default Home;
