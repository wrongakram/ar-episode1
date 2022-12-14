import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique brand</span>
            </div>
            <div className="line">
              <span>that sticks</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
