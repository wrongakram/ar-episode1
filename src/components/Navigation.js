import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <Link to="/case-studies" exact>
                  Case studies
                </Link>
              </li>
              <li>
                <Link to="/approach" exact>
                  Approach
                </Link>
              </li>
              <li>
                <Link to="/about" exact>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <Link to="/contact" exact>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/audit" exact>
                    Get a free audit
                  </Link>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 75 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
