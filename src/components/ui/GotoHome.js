import React from "react";
import { Link } from "react-router-dom";

const GotoHome = () => {
  return (
    <div className="d-flex justify-content-center">
      <Link to="/" className="btn btn-outline-dark text-center gotoHomeLink">
        {" "}
        Go to Home
      </Link>
    </div>
  );
};

export default GotoHome;
