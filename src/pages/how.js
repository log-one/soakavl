import * as React from "react";
import "../styles/how.css";
import rainBarrel from "../images/rainBarrel.jpeg";
import rainBarrelDiag from "../images/rainBarrelDiag.jpeg";
import rainGarden from "../images/rainGarden.jpeg";
import rainGardenDiag from "../images/rainGardenDiag.jpeg";
import frenchDrain from "../images/frenchDrain.jpeg";
import frenchDrainDiag from "../images/frenchDrainDiag.webp";
import bioswale from "../images/bioswale.jpeg";
import bioswaleDiag from "../images/bioswaleDiag.png";

// markup
const HowSection = ({howRef}) => {
  return (
    <div className="howSectionWrap" ref={howRef}>
      <h2 className="howHead">Perhaps now you care. How can you help?</h2>
      <div className="disWrap">
        <p>
          The primary cause of stormwater runoff is too many large stretches of
          impervious surfaces.
        </p>
        <p>
          The solution is to disconnect these impervious surface by introducing
          natural pervious surfaces that catch and filter manageable amounts of
          stormwater runoff by allowing it to soak.
        </p>
        <p className="disDef">
          This technique of managing stormwater is called
          <span> Disconnected Impervious Surfaces or DIS. </span> <br /> <br />
          Here's some examples:
        </p>
      </div>

      <p>The results of this survey are as follows: </p>
      <div className="solWrap">
        <div className="rainGWrap">
          <h3>Rain Gardens</h3>
          <p>
            Water loving plants that you can add to your landscape to make your
            lawn both beautiful and functional!
          </p>

          <div className="solImageWrap">
            <img className="rainGarden" src={rainGarden} />
            <img className="rainGardenDiag" src={rainGardenDiag} />
          </div>
        </div>

        <div className="rainBWrap">
          <h3>Rain Barrels</h3>

          <p>
            Add rain barrels to your existing gutters to collect rain and use it
            to water your plants and lawn!
          </p>
          <div className="solImageWrap">
            <img className="rainBarrel" src={rainBarrel} />
            <img className="rainBarrelDiag" src={rainBarrelDiag} />
          </div>
        </div>
        <div className="frenchDWrap">
          <h3>French Drains</h3>
          <p>
            A drain that can absorb water along it to redirect it away from
            where you don't want it (like by your house).
          </p>
          <div className="solImageWrap">
            <img className="frenchDrain" src={frenchDrain} />
            <img className="frenchDrainDiag" src={frenchDrainDiag} />
          </div>
        </div>
        <div className="bioswaleWrap">
          <h3>Bioswales</h3>
          <p>
            A place where water can be temporarily stored as it is reabsorbed
            into the earth.
          </p>
          <div className="solImageWrap">
            <img className="bioswale" src={bioswale} />
            <img className="bioswaleDiag" src={bioswaleDiag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSection;
