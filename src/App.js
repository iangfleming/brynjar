/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/Home";
import projects from "./projects";
import memories from "./memories";

class App extends Component {
  render() {
    const projectsArray = Object.values(projects);
    const memoriesArray = Object.values(memories);
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/(|work|life)" component={Home}/>
          {projectsArray.map((Project, idx) => {
            const path = `/work/${Project.slug}`;
            return (<Route exact path={path} component={Project.component}/>)
          })}
          {memoriesArray.map((Memory, idx) => {
            const path = `/life/${Memory.slug}`;
            return (<Route exact path={path} component={Memory.component}/>)
          })}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
