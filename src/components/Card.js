import React, { Component } from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import { animated, Spring } from "react-spring";

class Card extends Component {
  render() {
    const StyledLink = glamorous(Link)({
      display: "block",
      position: "relative",
      width: "270px",
      height: "270px",
      marginBottom: "5rem",
      textDecoration: "none",
      color: Colors.text,
      padding: "1rem",
      border: "8px solid",
      borderColor: Colors.teal,
      transition: "all 100ms cubic-bezier(0.5, 0, 0.1, 1)",
      [":hover"]: {
        borderColor: Colors.pink
      }
    });
    const Title = glamorous.h2({
      fontSize: Sizes.superhead,
      fontWeight: "600",
      margin: 0
    });
    const Line = glamorous.div({});

    const titleLines = this.props.projectName.split(" ");

    return (
      <StyledLink to={this.props.projectLink}>
        <Title>
          {titleLines.map(line => (
            <Line dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </Title>
        {this.props.children}
      </StyledLink>
    );
  }
}

export default Card;
