import React, { Component } from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import { animated, Spring } from "react-spring";

class Card extends Component {
  state = {
    open: false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const CardOuter = glamorous.div(
      {
        position: "relative",
        width: "250px",
        height: "250px",
        border: `8px solid ${Colors.teal}`,
        padding: "1rem",
        // transition: "transform 175ms",
        // [MediaQueries.md]: {
        //   height: "10vmax",
        // },
        // ":hover": {
        //   transform: "scale(1.05)"
        // },
        // ":active, :focus": {
        //   transform: "scale(1)"
        // },
      },
      ({ open }) => ({
        transform: open ? "scale(3)" : "scale(1)"
      })
    );

    const Title = glamorous.h2({
      fontSize: Sizes.superhead,
      fontWeight: "600",
      margin: 0,
    });
    const Line = glamorous.div({
      display: "flex",
      justifyContent: "space-between",
    })
    const StyledLink = glamorous(Link)({
      textDecoration: "none",
      color: Colors.text,
    })

    const titleLines = this.props.projectName.split(" ")

    return (
      <StyledLink to={this.props.projectLink}>
        <CardOuter open={this.state.open}>
            <Title>
              {titleLines.map((line) => (
                <Line dangerouslySetInnerHTML={{__html: line}} />
              ))}
            </Title>
            {this.props.children}
        </CardOuter>
      </StyledLink>
    );
  }
}

export default Card;
