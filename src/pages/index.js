import * as React from "react";
import { useRef } from "react";
import "../styles/home.css";
import mountains from "../images/mountains.svg";
import NavBar from "../components/NavBar";
import WhatSection from "./what";
import StorySection from "./story";
import WhySection from "./why";
import HowSection from "./how";
import SurveySection from "./survey";
import { ParallaxProvider } from "react-scroll-parallax";
// markup
const IndexPage = () => {
  // run this function from an event handler or an effect to execute scroll

  const whatRef = useRef();
  const storyRef = useRef();
  const whyRef = useRef();
  const howRef = useRef();
  const moreRef = useRef();

  return (
    <div className="homeWrap">
      <title>Soak, Asheville</title>
      <div className="topWrap">
        <NavBar
          whatRef={whatRef}
          storyRef={storyRef}
          whyRef={whyRef}
          howRef={howRef}
          moreRef={moreRef}
        />
        <img className="mountains" src={mountains} alt="yellow arrow" />
      </div>
      <WhatSection whatRef={whatRef} />
      <ParallaxProvider>
        <StorySection storyRef={storyRef} />
      </ParallaxProvider>
      <WhySection whyRef={whyRef} />
      <HowSection howRef={howRef} />
      <SurveySection moreRef={moreRef} />
    </div>
  );
};

export default IndexPage;
