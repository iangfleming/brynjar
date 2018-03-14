import React, { Component } from 'react';
import glamorous from "glamorous";
import Card from "../components/Card";
// import Goo from "./components/Goo";

const projects = [
  {
    title: "Carbon Design System",
    content: "lorem test"
  },
  {
    title: "Carbon Design System",
    content: "lorem test"
  },
  {
    title: "Carbon Design System",
    content: "lorem test"
  },
  {
    title: "Carbon Design System",
    content: "lorem test"
  },
  {
    title: "Carbon Design System",
    content: "lorem test"
  }
]
class Work extends Component {
  render() {
    return (
      <glamorous.Div
        className="transition-item"
        display="flex"
        flexFlow="row wrap"
        justifyContent="space-evenly"
        margin="1rem"
      >
        {projects.map((project, idx) => {
          return (
            <Card
              key={idx}
            >
              {project.title}
            </Card>
          )
        })}
      </glamorous.Div>
    )
  }
}

export default Work;