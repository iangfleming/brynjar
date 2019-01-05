import React, { Component } from "react";
import { withRouter } from "react-router";
import {
  animated,
  Spring
} from "react-spring";
import glamorous from "glamorous";
import Card from "../components/Card";
import ShadowLink from "../components/ShadowLink";
import projects from "../projects";
import experiments from "../experiments";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";

class Work extends Component {
  render() {
    const WorkContent = glamorous.div({
      display: "flex",
      maxWidth: "1000px",
      margin: "1rem auto",
      paddingTop: "180px",
      [MediaQueries.md]: {
        paddingTop: "150px",
      }
    });
    const Label = glamorous.h2({
      fontSize: Sizes.base,
      textTransform: "uppercase",
      transform: "rotate(-90deg)",
      transformOrigin: "bottom right",
      margin: 0,
    });
    const projectsArray = Object.values(projects);
    const experimentsArray = Object.values(experiments);
    if (this.props.active) {
      return (
        <Spring
          from={{ transform: "translateY(100%)" }}
          to={{ transform: "translateY(0%)" }}
          delay="500"
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
                ...styles
              }}
            >
              <WorkContent>
                <glamorous.Div marginRight="2rem">
                  <Label>Projects</Label>
                </glamorous.Div>
                <glamorous.Div
                  position="relative"
                  display="flex"
                  flexFlow="row wrap"
                >
                    {projectsArray.map((Project, i) => {
                      const path = `/work/${Project.slug}`;
                      return (
                        <React.Fragment>
                          <glamorous.Div
                            key={i}
                            flexGrow="1"
                            flex="1 1 40%"
                            margin="1rem"
                          >
                            <Card
                              projectLink={path}
                              projectName={Project.name}
                              projectDescription={Project.description}
                              projectColor={Project.color}
                              projectImage={Project.image}
                            />
                          </glamorous.Div>
                        </React.Fragment>
                      );
                    })}
                </glamorous.Div>
              </WorkContent>
              <glamorous.Div
                display="flex"
                maxWidth="1000px"
                margin="1rem auto"
                padding="5rem 0"
              >
                <glamorous.Div marginRight="2rem">
                  <Label>Experiments</Label>
                </glamorous.Div>
                <glamorous.Div
                  position="relative"
                  display="flex"
                  flexFlow="row wrap"
                >
                  {experimentsArray.map(Experiment => {
                    let path = null;
                    if (Experiment.slug) {
                      path = `/work/${Experiment.slug}`;
                    }
                    const linkProps = {
                      to: path ? path : null,
                      href: Experiment.href ? Experiment.href : null
                    };
                    return (
                      <div
                        style={{
                          flexGrow: 1,
                          flex: "1 1 40%",
                          marginBottom: "5rem"
                        }}
                      >
                        <ShadowLink {...linkProps}>
                          {Experiment.name}
                        </ShadowLink>
                      </div>
                    );
                  })}
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
