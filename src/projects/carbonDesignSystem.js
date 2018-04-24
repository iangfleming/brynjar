import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";

class carbonDesignSystem extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <h1>Carbon Design System</h1>
        <h4>A design ecosystem for IBM products</h4>
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
