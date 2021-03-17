import React from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => (
  <div className="nav bg-light d-flex justify-content">
    <Link className="nav-link" to="/">
      OPENSOURCE:DEV
    </Link>
    <Link className="nav-link" to="/login">
      Login
    </Link>
    <Link className="nav-link" to="/register">
      Register
    </Link>
  </div>
);

export default TopNav;
