import React, { Component } from 'react';
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from '../components/ProjectModal';

class phobioOps extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <h1>ops</h1>
        <p>
          design and build complex react SPA
        </p>
      </ProjectModal>
    )
  }
}

export default phobioOps;