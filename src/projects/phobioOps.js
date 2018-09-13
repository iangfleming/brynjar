import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";

class phobioOps extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
          <h1>Phobio Operations App</h1>
          <h3>Need</h3>
          <p>
            Phobio works with cell phone retailers to handle devices that are
            traded-in by customers upgrading their devices. To the customer it
            is presented a simple easy process but behind the scenes there is
            quite an infrastructure to handle around a million devices a year.
          </p>
          <p>
            This project in particular was to redesign the internal application
            that Phobio team members in the various warehouses around the
            country use to track and managed all these devices.
          </p>
          <h3>Process</h3>
          <p>
            The previous interation of the these tools usuable but far from
            ideal. It presented the users with every piece of information and
            every available option with very little hierachy. And the last thing
            you want to be doing in a fast pace warehouse enviroment is hunting
            through a dense screen of information for the one option you need.
          </p>
          <p>
            The problem was clear and so was the solution. By simplifying the
            interface for the majority of users we could drastically increase
            speed and accuracy while reducing stress and improving the
            experience for them.
          </p>
          <h3>Build</h3>
          <p>
            The majority of the Phobio applications just use a simple MVC
            pattern with Django. However, because of the limited scope of this
            new app I decided it would be a good place to start modernizing the
            tech stack.
          </p>
          <p>
            The Django backend stayed intact but I built the client-side using
            React with Redux for state management and Glamorous for performant
            CSS-in-JS styles.
          </p>
          <p>
            I'd been involved in building several large React apps but his was
            the first time, outside of personal projects, I'd built one from
            scratch! It was an excellent learning experience for me and a step
            in the right direction for Phobio's codebase.
          </p>
          <h3>Result</h3>
          <p />
        </glamorous.Div>
      </ProjectModal>
    );
  }
}

export default phobioOps;
