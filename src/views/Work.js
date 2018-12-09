import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import {
  Trail,
  Transition,
  animated,
  interpolate,
  config,
  Spring
} from "react-spring";
import glamorous from "glamorous";
import Card from "../components/Card";
import ShadowLink from "../components/ShadowLink";
import projects from "../projects";
import Sizes from "../vars/Sizes";

class Work extends Component {
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
        <Spring
          from={{ transform: "translateY(100%)" }}
          to={{ transform: "translateY(0%)" }}
          native
        >
          {styles => (
            <animated.div
              className="work"
              style={{
                background: "white",
                minHeight: "100%",
                margin: "0 -5vw",
                clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0% 100%)",
                // why isn't this working (fix)
                padding: "0 -5vw",
                ...styles,
              }}
            >
              <glamorous.Div
                display="flex"
                maxWidth="1000px"
                margin="1rem auto"
                padding="5rem 0"
              >
                <div>
                  <SectionLabel>Projects</SectionLabel>
                </div>
                <glamorous.Div
                  position="relative"
                  display="flex"
                  flexFlow="row wrap"
                >
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
                              flex: "1 1 40%",
                              marginBottom: "5rem",
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
              </glamorous.Div>
              <glamorous.Div
                display="flex"
                maxWidth="1000px"
                margin="1rem auto"
                padding="5rem 0"
              >
                <div>
                  <SectionLabel>Experiments</SectionLabel>
                </div>
                <glamorous.Div
                  position="relative"
                  display="flex"
                  flexFlow="row wrap"
                >
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
                              flex: "1 1 40%",
                              marginBottom: "5rem",
                            }}
                          >
                            <ShadowLink experimentLink={path}>{Project.name}</ShadowLink>
                          </animated.div>
                        </React.Fragment>
                      );
                    }}
                  </Trail>
                </glamorous.Div>
              </glamorous.Div>
            </animated.div>
          )}
        </Spring>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(Work);
