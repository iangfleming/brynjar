import React, { Component } from 'react';
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from '../components/ProjectModal';

class IBMDesignCamp extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <h1>design camp</h1>
      </ProjectModal>
    )
  }
}

export default IBMDesignCamp;