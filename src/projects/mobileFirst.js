import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";

class mobileFirst extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
          <h1>Mobile farts</h1>
          <p>
            Sometimes preventing a bad product from being made is just as
            important as building a good one. Although it's weird having nothing
            to show for 6 months of work!
          </p>
          <p>
            My first team after joining IBM Design was the MobileFirst product
            group. At the time they were feeling pressure to do build something
            new. As is often the case in large companies with beaucracies.
          </p>
          <p />
        </glamorous.Div>
      </ProjectModal>
    );
  }
}

export default mobileFirst;
