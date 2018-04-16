import React, { Component } from "react";
import { withRouter } from "react-router";
import glamorous from "glamorous";
import camelToDash from "../utils/camelToDash";

class Card extends Component {
  state = {
    open: false
  }
  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    const CardOuter = glamorous.div({
      height: "10rem",
      width: "10rem",
      border: "1px solid black",
      margin: "1rem"
    }, 
    ({open}) => ({
      transform: open ? "scale(3)" : "scale(1)"
    })
  );

    const Title = glamorous.h2({
      fontSize: "1rem"
    })

    return (
      <CardOuter
        open={this.state.open}
        // onClick={this.handleClick}
      >
        <Title>{this.props.projectName}</Title>
        {this.props.children}
      </CardOuter>
    )
  }
};

export default Card;