import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";
import Card from "../card/Card";

function Body() {
  return (
    <div>
      <div className="container mt-5">
        <div className="container-fluid">
          <h3>Look at the properities to Rent</h3>
        </div>
        <div className="container mt-5">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Body;
