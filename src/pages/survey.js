import * as React from "react";
import "../styles/survey.css";
import bucket1 from "../images/bucket1.webp";
import bucket2 from "../images/bucket2.webp";
import bucket3 from "../images/bucket3.webp";
import bucket4 from "../images/bucket4.webp";
import bucket5 from "../images/bucket5.webp";
import indGraph1 from "../images/indGraph1.webp";
import indGraph2 from "../images/indGraph2.webp";
import indGraph3 from "../images/indGraph3.webp";
import indGraph4 from "../images/indGraph4.webp";
import indGraph5 from "../images/indGraph5.webp";
import commGraph1 from "../images/commGraph1.webp";
import commGraph2 from "../images/commGraph2.webp";
import commGraph3 from "../images/commGraph3.webp";
import commGraph4 from "../images/commGraph4.webp";
import commGraph5 from "../images/commGraph5.webp";

// markup
const SurveySection = ({ moreRef }) => {
  return (
    <div className="surveySectionWrap" ref={moreRef}>
      <h2 className="surveyHead">
        Lenoir-Rhyne University's Sustainability Studies graduate program
        conducted a survey of the CAW.
      </h2>
      <div className="demographicsWrap">
        <h3>Demographics</h3>
        <img src={bucket1} />
        <img src={bucket2} />
        <img src={bucket3} />
        <img src={bucket4} />
        <img src={bucket5} />
      </div>

      <div className="individualsWrap">
        <h3>Individual Experience</h3>
        <img src={indGraph1} />
        <img src={indGraph2} />
        <img src={indGraph3} />
        <img src={indGraph4} />
        <img src={indGraph5} />
      </div>

      <div className="commWrap">
        <h3>Community Opinion</h3>
        <img src={commGraph1} />
        <img src={commGraph2} />
        <img src={commGraph3} />
        <img src={commGraph4} />
        <img src={commGraph5} />
      </div>
    </div>
  );
};

export default SurveySection;
