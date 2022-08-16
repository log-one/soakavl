import * as React from "react";
import "../styles/story.css";
import rainClouds from "../images/rainClouds1.svg";
import rainEarth from "../images/rainEarth.svg";
import rain from "../images/rainDrops.svg";
import grassGround from "../images/grassGround.svg";
import roadGround from "../images/roadGround.svg";
import townBranch from "../images/townBranch.png";
import bacoateBranch from "../images/bacoateBranch.png";
import haithBranch from "../images/haithBranch.png";
import branchMerge from "../images/waterBranch.png";
import frenchBroad from "../images/frenchBroad.jpeg";

import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

// markup
const StorySection = ({ storyRef }) => {
  const parallax1 = useParallax({
    speed: -40,
  });
  const parallax2 = useParallax({
    speed: -40,
  });

  return (
    <div className="storySectionWrap" ref={storyRef}>
      {/* <h2 className="storyHead">Stormwater? Watershed? Here's the story.</h2> */}
      <p className="storyIntro">
        Let us look at what stormwater and watersheds are through the story of
        rain.
      </p>
      <div className="rainStoryWrap">
        <div className="rainStoryOverlay"></div>

        <img className="rainClouds" src={rainClouds} />

        <img ref={parallax1.ref} className="rain1" src={rain} />
        <img ref={parallax2.ref} className="rain2" src={rain} />

        <p className="p1">
          When rain reaches the surface of the Earth, one of two things happens.
        </p>

        <div className="soakOrRun">
          <p className="p1a"> It soaks. </p>

          <p className="p1b"> Or it runs. </p>
        </div>

        <img className="rainEarth" src={rainEarth} />
      </div>
      <div className="stormStoryWrap">
        <div className="soakRunWrap">
          <div className="soakWrap">
            <div className="soakRunOverlay">
              <img className="grassGround" src={grassGround} alt="Map of CAW" />
            </div>

            <p>
              If the rainwater is able to penetrate the surface, then it soaks
              into the ground. <br /> <br /> Such surfaces like grass, planted
              areas, mulch, sand, clay etc. are called
              <span className="perv"> pervious surfaces </span>.
            </p>
          </div>
          <div className="runWrap">
            <div className="soakRunOverlay">
              <img className="roadGround" src={roadGround} alt="Map of CAW" />
            </div>
            <p>
              If the rainwater is unable to penetrate the surface, then it runs
              off the surface, collecting all the dirt and grime. <br /> <br />
              Such surfaces like concrete, asphalt, rooftops, parking lots etc.
              are called <span className="imperv">impervious surfaces </span>.
            </p>
          </div>
        </div>

        <div className="stormwaterDiv">
          <p className="p4">
            The polluted rainwater that runs off of impervious surfaces is
            called
            <span> stormwater.</span>
          </p>
        </div>
      </div>
      <div className="watershedStoryWrap">
        {/* <h2 className="h2">Now, what is a watershed?</h2> */}
        <div className="watershedDef">
          <p className="shedDef">
            Any area of land where all the rainwater reaching it's surface finds
            its way into a single body of water is called a{" "}
            <span>watershed.</span>
          </p>
          <p>
            All raindrops that fall onto the area of land known as the Central
            Asheville Watershed (CAW) trickles it's way into small streams,
            which flow into larger streams, all of which eventually makes it's
            way into the French Broad River.
          </p>
        </div>

        <p className="p5">
          Apart from other streams, the rainwater that reaches the surface of
          the CAW eventually reaches three major streams that flow through the
          River Arts District...
        </p>
        <div className="threeStreams">
          <div className="townBranchWrap">
            <h2>Town Branch</h2>
            <img className="townBranch" src={townBranch} />
            <p></p>
          </div>
          <div className="bacoateBranchWrap">
            <h2>Bacoate Branch</h2>
            <img className="bacoateBranch" src={bacoateBranch} />
          </div>
          <div className="haithBranchWrap">
            <h2>Haith Branch</h2>
            <img className="haithBranch" src={haithBranch} />
          </div>
        </div>
        <p className="p6">
          ...all three streams in the Central Asheville Watershed flow into a
          section of the <span>French Broad River </span> that is a popular recreation
          destination for local residents and out of town visitors.
        </p>
        <img className="frenchBroad" src={frenchBroad} />
      </div>
    </div>
  );
};

export default StorySection;
