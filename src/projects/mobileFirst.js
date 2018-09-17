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
          <h1>IBM MobileFirst</h1>
          <p>
            Sometimes preventing the wrong product from being made is just as
            important as building a product. Although it's weird having nothing
            to show for several months of work!
          </p>
          <p>
            My first team after joining IBM Design was the MobileFirst product
            group. At the time the product managers debating building a new
            analytics tool for mobile developers. We had an analytics tool
            already but it was very basic with limited insights.
          </p>
          <p>
            Myself and a teammate were tasked with researching the mobile
            analytics space and learning what our users would need.
          </p>
          <p>
            When you are working in an unfamiliar area of knowledge it can
            sometimes take awhile to see the forest for the trees.
          </p>
          <p>
            We interviewed developers, read everything we could about the
            domain, and dug deep into all our competitors products.
          </p>
          <p>
            We eventually realized that the needs of our users were{" "}
            <strong>already</strong> being met by other{" "}
            <strong>IBM products</strong>! As crazy as it may seem, in a company
            as big as IBM there are so many products that it's really easy for
            them to overlap.
          </p>
          <p>
            After this realization we designed a plan for our existing analytics
            tool to work with, instead of against, the other IBM analytics
            products.
          </p>
          <p>
            It's a weird thing to talk about. We didn't end up building
            anything. But I would argue that the research and synthesis we did
            was far more valuable than just building another app. We saved the
            company time and money and most importantly helped product teams
            that weren't talking to eachother connect.
          </p>
        </glamorous.Div>
      </ProjectModal>
    );
  }
}

export default mobileFirst;
