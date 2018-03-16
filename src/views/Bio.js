import React, { Component } from 'react';
import glamorous from "glamorous";
import ian from "../images/ian.jpg";

class Bio extends Component {
  render() {
    return (
      <glamorous.Div
        className="transition-item"
        display="flex"
        flexFlow="row wrap"
        justifyContent="center"
        margin="1rem"
      >
        <glamorous.Img
          src={ian}
          alt="ian fleming bio photo"
          width="auto"
          height="20rem"
         />
      </glamorous.Div>
    )
  }
}

export default Bio;