import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">GRETEL.</a>
          </div>
          <div className="nav-toggle">
            <div className="hamburger-menu">
              <span></span>
              <span></span>
            </div>
            <div className="hamburger-menu-close">
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
