import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = ({ title }) => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='row'>
          <h2 ref={title}>
            <div className='line'>
              <span>We craft eCommerce brands,</span>
            </div>
            <div className='line'>
              <span>driven by instinct.</span>
            </div>
          </h2>
          <div className='btn-row'>
            <a href='/'>
              More about us
              <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
