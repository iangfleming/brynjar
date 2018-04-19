import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import glamorous from "glamorous";
import camelToDash from "../utils/camelToDash";
import camelToTitle from "../utils/camelToTitle";
import Card from "../components/Card";
import * as projects from "../projects";
// import Goo from "./components/Goo";

class Work extends Component {
  render() {
    const projectsArray = Object.values(projects);
    return (
      <div className="transition-item work">
        <glamorous.Div
          display="flex"
          flexFlow="row wrap"
          justifyContent="space-evenly"
          margin="1rem"
        >
          {projectsArray.map((project, idx) => {
            return (
              <div key={idx}>
                <Card projectName={camelToTitle(project.name)}>
                  <Link
                    to={`${this.props.match.url}/${camelToDash(project.name)}`}
                  >
                    liink
                  </Link>
                </Card>
                <Route
                  path={`${this.props.match.url}/${camelToDash(project.name)}`}
                  component={project}
                />
              </div>
            );
          })}
        </glamorous.Div>
      </div>
    );
  }
}

export default Work;
