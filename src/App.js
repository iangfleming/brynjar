import React, { Component } from 'react';
import glamorous from "glamorous";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
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
        {/* <Goo /> */}
      </div>
    );
  }
}

export default App;
