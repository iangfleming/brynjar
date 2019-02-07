/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ScrollReset from "./components/ScrollReset";
import Home from "./views/Home";
import projects from "./projects";
import Acorns from  "./experiments/Acorns";
import memories from "./memories";
import Upload from "./views/Upload";

class App extends Component {
  render() {
    const projectsArray = Object.values(projects);
    const memoriesArray = Object.values(memories);
    return (
      <BrowserRouter>
        <ScrollReset>
          <Route exact path="/(|work|life)" component={Home} />
          {projectsArray.map((Project, idx) => {
            const path = `/work/${Project.slug}`;
            return (
                <Route exact path={path} component={Project.component} />
            );
          })}
          <Route exact path="/work/acorns" component={Acorns} />
          {memoriesArray.map((Memory, idx) => {
            const path = `/life/${Memory.slug}`;
            return <Route exact path={path} component={Memory.component} />;
          })}
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/links" component={Home} />
        </ScrollReset>
      </BrowserRouter>
    );
  }
}

export default App;
