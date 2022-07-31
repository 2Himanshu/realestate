import React, { useState } from "react";
import Data from "../../Data/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";
import Popper from "popper.js";

function Card() {
  const [items, setItems] = useState(Data);
  const [city, setCity] = useState();
  const [category, setCategory] = useState();
  const [beds, setBeds] = useState();
  const [price, setPrice] = useState();
  // const [city, setCity] = useState();
  const filterItem = () => {
    const updatedItems = Data.filter((currEle) => {
      return (
        currEle.catergory === category &&
        currEle.location === city &&
        parseInt(currEle.beds) >= parseInt(beds) &&
        parseInt(currEle.price) <= parseInt(price)
      );
      // console.log(currEle.location);
    });
    setItems(updatedItems);
  };
  return (
    <div>
      <div className="card">
        <div className="column" style={{ display: "inline-flex" }}>
          <select
            class="custom-select"
            onChange={(e) => setCity(e.target.value)}
          >
            <option selected>Choose city</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="kolkata">Kolkata</option>
            <option value="pune">Pune</option>
            <option value="jaunpur">Jaunpur</option>
            <option value="ahemdabad">Ahemdabad</option>
          </select>

          <select
            class="custom-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option selected>Choose Catergory.</option>
            <option value="Bunglow">Bunglow</option>
            <option value="flat">Flat</option>
          </select>

          <select
            class="custom-select"
            onChange={(e) => setBeds(e.target.value)}
          >
            <option selected>no of beds</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <button
            className="btn btn-warning text-white"
            onClick={() => filterItem()}
          >
            search
          </button>
        </div>
      </div>
      {items.map((post) => {
        return (
          <div
            className="col-md-4 mt-5 container-fluid"
            style={{ display: "inline-flex" }}
          >
            <div
              className="card shadow-lg p-3 mb-5 bg-white rounded"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src={post.img}
                alt="Card image cap"
                height="150px"
              />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "green" }}>
                  ₹{post.price}
                  <span style={{ fontSize: "16px", color: "grey" }}>
                    /month
                  </span>
                </h5>
                <h5 className="card-text">{post.title}</h5>
                <p>{post.address}</p>

                <a
                  href="#"
                  className="me-2"
                  style={{
                    textDecoration: "none",
                    fontSize: "12px",
                    color: "grey",
                  }}
                >
                  <i class="fa fa-map-marker fa-fw"></i> {post.location}
                </a>

                <hr />
                <div className="column text-center ml-2">
                  <a
                    href="#"
                    className="me-2"
                    style={{
                      textDecoration: "none",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    <i class="fa fa-bed fa-fw"></i> {post.beds} beds
                  </a>
                  <a
                    href="#"
                    className="me-2"
                    style={{
                      textDecoration: "none",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    <i class="fa fa-bathtub fa-fw"></i> {post.bathroom} bathroom
                  </a>
                  <a
                    href="#"
                    className="me-2"
                    style={{
                      textDecoration: "none",
                      fontSize: "12px",
                      color: "grey",
                    }}
                  >
                    <i class="fa fa-home fa-fw"></i> {post.size} m
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
