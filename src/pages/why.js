import * as React from "react";
import "../styles/why.css";
import eColi from "../images/eColi.jpeg";
import stormDrain from "../images/stormDrain.png";
import deadFish from "../images/deadFish.jpeg";

// markup
const WhySection = ({ whyRef }) => {
  return (
    <div className="whySectionWrap" ref={whyRef}>
      <h2 className="whyHead">
        So you understand watersheds and stormwater, but why should you care?
      </h2>

      <div className="whyP1">
        <p className="q1">Do you want to swim with bacteria found in poop?</p>
        <img src={eColi} />
        <div>
          <p>
            Along it's journey to the French Broad river, stormwater can pick up
            animal waste, trash and debris, sediment, oils and chemicals, etc.
            and severely decrease the water quality of the French Broad and the
            streams that precede it.
          </p>
          <p>
            The French Broad Riverkeeper has also found high levels of e-coli in
            Town Branch, and the section of the French Broad River that all
            three streams flow into has E-coli levels that frequently exceed the
            EPA’s recommended limit for safe swimming.
          </p>
        </div>
      </div>

      <div className="whyP2">
        <img src={stormDrain} />

        <p className="q2">Do you enjoy stepping in puddles?</p>

        <div>
          <p>
            When it rains, a stormwater system of inlets, storm drains, pipes,
            and ditches carries runoff to local water bodies. Stormwater is not
            carried to a wastewater treatment plant.
          </p>
          <p>
            With a lack of pervious surfaces to help slow down the flow of
            stormwater, heavy rains can often overwhelm a city's stormwater
            drain system and lead to flooding.
          </p>
        </div>
      </div>

      <div className="whyP3">
        <p className="q3">Do you want life under water to die?</p>
        <img src={deadFish} />

        <div>
          <p className="testP">
            Water quality tests have found high nutrient levels that create a
            toxic environment for fish and other aquatic wildlife by algae
            overgrowth.
          </p>
          <p>
            Other pathogens, sediments and pollutants from stormwater runoff
            also impair the aquatic ecosystem.
          </p>
        </div>
      </div>

      {/* <div className="whyP4">
        <p className="q4">
          So, if you.
        </p>
      </div> */}
    </div>
  );
};

export default WhySection;
