import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import logo from "../../assets/logo.png";
import "./Employee.css";
import useEmployee from "../../hooks/useEmployee";

function Employee() {
    const {data } = useEmployee()

        console.log(data)

    return (
        <>
            <div className="header">
                <div className="header-item">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1>WEALTH HEALTH</h1>
                </div>
                <Link to="/" className="view-home-link">
                    <button>Home</button>
                </Link>
            </div>
        </>
    );
}

export default Employee;
