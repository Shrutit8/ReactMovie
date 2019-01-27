import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-5">
        <span className="navbar-brand mb-0 h1 mx-auto">Movie App</span>
      </nav>

      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav flex-column font-weight-bold text-uppercase flex-sm-row justify-content-center">
            <NavLink className="nav nav-item nav-link linkAnimate " to="/">
              Home
            </NavLink>
            <NavLink
              className="nav nav-item nav-link linkAnimate"
              to="/searchPage"
            >
              Search
            </NavLink>
            <NavLink
              className="nav nav-item nav-link linkAnimate"
              to="/featuredPage"
            >
              Featured Page
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
