import React from "react";
import "./NavBar.css";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function NavBar() {
  return (
    <Router>
      <div className="nav">
        <div className="nav-container">
          <div className="logo">
            <Link to="#" className="logo">
              Open Revise
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="../pages/past-papers.js">Past Papers</Link>
            </li>
            <li className="nav-item">
              <Link to="../pages/worksheets.js">Worksheets</Link>
            </li>
            <li className="nav-item">
              <Link to="../pages/notes.js">Notes</Link>
            </li>
            <li className="nav-item" id="nav-btn">
              <Link to="../pages/signIn.js">
                <Button>Sign In</Button>
              </Link>
            </li>
            <li className="nav-item" id="nav-btn2">
              <Link to="../pages/register.js">
                <Button>Register</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default NavBar;
