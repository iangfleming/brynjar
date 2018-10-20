/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import projects from "./projects";

class App extends Component {
  render() {
    const projectsArray = Object.values(projects);
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/(|work|life)" component={Home}/>
          {projectsArray.map((Project, idx) => {
            const path = `/work/${Project.slug}`;
            console.log("hi", Project)
            return (<Route exact path={path} component={Project.component}/>)
          })}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
