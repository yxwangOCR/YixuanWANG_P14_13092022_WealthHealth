import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <Logo />
        <div className="links">
          <Link to="/employee-list" className="view-employee-link">
            <button>View Current Employee</button>
          </Link>

          <button className="gitHub__link">
            <a
              href="https://github.com/yxwangOCR/YixuanWANG_P14_13092022_WealthHealth"
              rel="noopener"
              target="blank"
            >
              Code Source On GitHub
            </a>
          </button>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default Home;
