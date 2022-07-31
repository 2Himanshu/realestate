import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light py-3 sticky-top">
      <div className="container-fluid">
        <div>
          <button
            className="btn btn-light me-2"
            style={{ fontSize: "23px", fontWeight: "900" }}
            disabled
          >
            Real Estate
          </button>
        </div>
        <div className="column">
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-outline-primary">Signup</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
