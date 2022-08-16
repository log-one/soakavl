import * as React from "react";
import { useRef } from "react";
import "../styles/what.css";
import cawMap from "../images/CAWmap.png";
import blackArrow from "../images/blackArrow.png";

const WhatSection = ({ whatRef }) => {
  return (
    <div className="whatSectionWrap" ref={whatRef}>
      {/* <h2 className="whatHead">Let what soak?</h2> */}
      <h4 className="whatHeadAns">
        This is the Central Asheville Watershed. To protect it, we must
        <span> let stormwater soak.</span>
      </h4>
      <img className="blackArrow" src={blackArrow} alt="Map of CAW" />
      <img className="cawMap" src={cawMap} alt="Map of CAW" />
    </div>
  );
};

export default WhatSection;
