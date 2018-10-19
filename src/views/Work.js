import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { Trail, Transition, animated, interpolate, config } from "react-spring";
import glamorous from "glamorous";
import Card from "../components/Card";
import projects from "../projects";

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
    const projectsArray = Object.values(projects);
    console.log(projectsArray);
    if (this.props.active) {
      return (
        <div className="work">
          <glamorous.Div display="flex" flexFlow="row wrap" margin="1rem 0">
            <Trail
              from={{ Y: 100 }}
              to={{ Y: 0 }}
              keys={projectsArray.map(project => project.key)}
              delay="500"
              native
            >
              {projectsArray.map((Project, idx) => ({ Y }) => {
                const path = `/work/${Project.slug}`;
                return (
                  <React.Fragment>
                    <animated.div
                      key={idx}
                      style={{
                        transform: Y.interpolate(Y => `translateY(${Y}vh)`)
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
                    <Route
                      path={path}
                      children={({ match, path, ...rest }) => (
                        <Transition
                          from={{ opacity: 0, scale: .6 }}
                          enter={{ opacity: 1, scale: 1 }}
                          leave={{ opacity: 0, scale: .6 }}
                          config={{tension: 250, friction: 20}}
                          native
                        >
                          {match &&
                            (({ opacity, scale }) => (
                              <animated.div
                                style={{
                                  opacity: opacity,
                                  transform: scale.interpolate(scale => `scale(${scale})`),
                                  height: "100vh",
                                  width: "100vw",
                                  position: "fixed",
                                  top: "0",
                                  left: "0",
                                  zIndex: "100"
                                }}
                              >
                                <Project.component match={match} {...rest} />
                              </animated.div>
                            ))}
                        </Transition>
                      )}
                    />
                  </React.Fragment>
                );
              })}
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
