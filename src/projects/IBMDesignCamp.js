import React, { Component } from 'react';
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from '../components/ProjectModal';

class IBMDesignCamp extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
        <h1>design camp</h1>
        </glamorous.Div>
      </ProjectModal>
    )
  }
}

export default IBMDesignCamp;