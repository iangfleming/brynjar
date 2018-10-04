import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import glamorous from "glamorous";
// import camelToDash from "../utils/camelToDash";
// import camelToTitle from "../utils/camelToTitle";
import AnimateProject from "../components/AnimateProject";
import Card from "../components/Card";
import projects from "../projects";
// import Goo from "./components/Goo";

class Work extends Component {
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }
  escFunction = (event) => {
    const re = /.*\/work\/.*/;
    if(event.keyCode === 27 && re.exec(this.props.location.pathname)) {
      this.props.history.push("/work");
    }
  }
  render() {
    const projectsArray = Object.values(projects);
    console.log(projectsArray)
    return (
      <div className="work">
        <glamorous.Div display="flex" flexFlow="row wrap" margin="1rem 0">
          {projectsArray.map((Project, idx) => {
            const path = `${this.props.match.url}/${Project.slug}`;
            return (
              <div key={idx}>
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
                      {match && <Project.component match={match} {...rest} />}
                    </AnimateProject>
                  )}
                />
              </div>
            );
          })}
        </glamorous.Div>
      </div>
    );
  }
}

export default withRouter(Work);
