import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  const clickHamburger = () =>{
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar navbar-expand-lg navbar-dark bg-dark") {
      x.className += " responsive";
    } else {
      x.className = "navbar navbar-expand-lg navbar-dark bg-dark";
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="myTopnav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resume">
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li onClick={clickHamburger} className="icon"><i className="fa fa-bars"></i></li>
      </ul>
    </nav>
  );
};

export default Nav;
