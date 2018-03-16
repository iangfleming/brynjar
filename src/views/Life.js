import React, { Component } from 'react';
import glamorous from "glamorous";
import Card from "../components/Card";
// import Goo from "./components/Goo";

const projects = [
  {
    title: "Life stuff",
    content: "hahahahah"
  },
  {
    title: "Life stuff",
    content: "hahahahah"
  }
]
class Life extends Component {
  render() {
    return (
      <div className="transition-item life">
        <glamorous.Div
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
      </div>
    );
  }
}

export default Life;