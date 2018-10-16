import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { Trail, animated, interpolate, config } from "react-spring";
import glamorous from "glamorous";
// import camelToDash from "../utils/camelToDash";
// import camelToTitle from "../utils/camelToTitle";
import AnimateProject from "../components/AnimateProject";
import Card from "../components/Card";
import projects from "../projects";
// import Goo from "./components/Goo";

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
                const path = `${this.props.match.url}/${Project.slug}`;
                return (
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
                    <Route
                      path={path}
                      children={({ match, path, ...rest }) => (
                        <AnimateProject match={match}>
                          {match && (
                            <Project.component match={match} {...rest} />
                          )}
                        </AnimateProject>
                      )}
                    />
                  </animated.div>
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
