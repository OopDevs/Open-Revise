import React, { useState } from "react";
import "./navBar.css";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState();
  const handleClick = () => setClick(!click);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" className="logo">
            Open Revise
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/past-papers">Past Papers</Link>
          </li>
          <li className="nav-item">
            <Link to="/worksheets">Worksheets</Link>
          </li>
          <li className="nav-item">
            <Link to="/notes">Notes</Link>
          </li>
          <li className="nav-item" id="nav-btn">
            <Link to="/sing-in">
              <Button>Sign In</Button>
            </Link>
          </li>
          <li className="nav-item" id="nav-btn2">
            <Link to="/regitster">
              <Button>Register</Button>
            </Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <i className="fas fa-times fa-lg"></i>
          ) : (
            <i className="fas fa-bars fa-lg"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
