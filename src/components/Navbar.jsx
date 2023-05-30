import React, { useState } from "react";

export default function Navbar(props) {
  return (
    <div style={{ zIndex: 2 }} className="navTop">
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{
          backgroundColor: "white",
          opacity: 0.9,
          position: "fixed",
          top: "0",
          width: "100%",
          backdropFilter: "blur(5px)",
          boxShadow: "2px 0 15px grey",
        }}
      >
        <img
          src="../2282259_dark.png"
          style={{ width: "2rem", marginLeft: "1rem" }}
        />
        <a
          className="navbar-brand brandBtn"
          name="homeBtn"
          style={{
            color: "#00235B",
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "cursive",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        >
          LayerPath Hunt
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarText"
          style={{ marginLeft: "20%" }}
        >
         
          <ul className="navbar-nav mr-auto" style={{ marginLeft: "70%" }}>
            <li className="nav-item">
              <a
                className="nav-link homeBtn"
                name="homeBtn"
                onClick={(e) => props.func(true) && window.location.reload()}
                style={{ color: "#00235B", cursor: "pointer" }}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                name="contactBtn"
                href="mailto:rahulsoniubr@gmail.com"
                style={{ color: "#00235B" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
