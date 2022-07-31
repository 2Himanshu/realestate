import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="column">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
