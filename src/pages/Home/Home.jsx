import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./Home.css";
import logo from "../../assets/logo.png";
import useEmployee from "../../hooks/useEmployee";


function Home() {
    const { data, setData } = useEmployee()

    return (
        <div className="home-container">
            <button onClick={() => setData(data+1)}>
                +
            </button>
            <div className="header">
                <div className="header-item">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1>WEALTH HEALTH</h1>
                </div>

                <Link to="/employee-list" className="view-employee-link">
                    <button>View Current Employee</button>
                </Link>
            </div>

            <Form />

        </div>
    );
}

export default Home;
