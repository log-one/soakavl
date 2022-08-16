import * as React from "react";
import "../styles/navbar.css";

// markup
const NavBar = ({ whatRef, storyRef, whyRef, howRef, moreRef }) => {
  const executeScroll = (ref) => () =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="navWrap">
      <div className="stickyMsgWrap">
        <h1 className="stickyMsg">Let it soak, Asheville!</h1>
      </div>
      <nav className="navBar">
        <ul className="navLinks">
          <li onClick={executeScroll(whatRef)}>What</li>
          <li onClick={executeScroll(storyRef)}>Story</li>
          <li onClick={executeScroll(whyRef)}>Why</li>
          <li onClick={executeScroll(howRef)}>How</li>
          {/* <li>Survey</li> */}
          <li onClick={executeScroll(moreRef)}>More</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
