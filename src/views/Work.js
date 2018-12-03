import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { Trail, Transition, animated, interpolate, config } from "react-spring";
import glamorous from "glamorous";
import Card from "../components/Card";
import projects from "../projects";
import Sizes from "../vars/Sizes";

class Work extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }
  escFunction = event => {
    const re = /.*\/work\/.*/;
    if (event.keyCode === 27 && re.exec(this.props.location.pathname)) {
      this.props.history.push("/work");
    }
  };
  render() {
    const SectionLabel = glamorous.h2({
      fontSize: Sizes.base,
      textTransform: "uppercase",
      transform: "rotate(-90deg)",
      flexGrow: 1,
      flex: "1 1 10%"
    });
    const projectsArray = Object.values(projects);
    if (this.props.active) {
      return (
        <div className="work">
          <glamorous.Div
            maxWidth="1000px"
            display="flex"
            position="relative"
            flexFlow="row wrap"
            margin="1rem auto"
            paddingBottom="5rem"
          >
            <SectionLabel>Projects</SectionLabel>
            <Trail
              from={{ Y: 100 }}
              to={{ Y: 0 }}
              items={projectsArray}
              delay="500"
              native
            >
              {(Project, i) => ({ Y }) => {
                const path = `/work/${Project.slug}`;
                return (
                  <React.Fragment>
                    <animated.div
                      key={i}
                      style={{
                        transform: Y.interpolate(Y => `translateY(${Y}vh)`),
                        flexGrow: 1,
                        flex: "1 1 40%"
                      }}
                    >
                      <Card
                        projectLink={path}
                        projectName={Project.name}
                        projectDescription={Project.description}
                        projectColor={Project.color}
                        projectImage={Project.image}
                      />
                    </animated.div>
                  </React.Fragment>
                );
              }}
            </Trail>
          </glamorous.Div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Work);
