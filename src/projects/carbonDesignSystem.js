import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";
import Sizes from "../vars/Sizes";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";

class carbonDesignSystem extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <glamorous.H1 fontSize={Sizes.head}>Carbon Design System</glamorous.H1>
        <glamorous.H4 fontSize={Sizes.sub}>A design ecosystem for IBM products</glamorous.H4>
        <h3>Summary</h3>
        <p>
          We built and maintained a system for both designers and developers of
          IBM products. So that products could be more easily maintained and end
          users would have a more consistent experience.
        </p>
        <p>
          The system includes a component library built using vanilla javascript
          and one for the React.js enviroment, design assets in a Sketch
          library, and a website with detailed documentation and usage
          guidelines.
        </p>
        <glamorous.Div
          width="100%"
        >
          <glamorous.Img
            src={hacktime1}
            alt=""
            width="auto"
            height="10rem"
          />
          <glamorous.Img
            src={hacktime2}
            alt=""
            width="auto"
            height="10rem"
          />
          <glamorous.Img
            src={hacktime3}
            alt=""
            width="auto"
            height="10rem"
          />
        </glamorous.Div>
        <h3>Need</h3>
        <p>
          At the time IBM Design consisted of several thousand designers. Which
          sounds like a lot! But at a company of over 300,000 employees that's
          actually not many. Theroetically design systems should have been
          helping IBM designers communicate their designs to the rest of the
          company. However, previous attempts at building design systems had
          never really taken off. When we researched this trend the problem was
          clear. The other attempts had primarily focused on static design
          assets and left engineers with the difficult task of translating them
          into code.
        </p>
        <p>
          interview teams, analyze other libraries, workshops, mass surveys
        </p>
        <h3>Process</h3>
        <p>
          interview teams, analyze other libraries, workshops, mass surveys
        </p>
        <h3>Result</h3>
        <p>
          awards, interviews, talks, smashing deisng book, massive adoption (npm stats)
        </p>
      </ProjectModal>
    );
  }
}

export default carbonDesignSystem;
