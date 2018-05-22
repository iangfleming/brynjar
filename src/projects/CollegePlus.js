import React, { Component } from 'react';
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from '../components/ProjectModal';

class CollegePlus extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <h1>Redesigning the CollegePlus Home Page</h1>
      </ProjectModal>
    )
  }
}

export default CollegePlus;