import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import camelToDash from "../utils/camelToDash";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";

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
        height: "10rem",
        width: "100vw",
        padding: "1rem",
        backgroundColor: Colors.text,
        clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)",
        overflow: "hidden",
        transition: "transform 175ms",
        ":after": {
          content: " ",
          position: "absolute",
          top: "0",
          left: "0",
          height: "150%",
          width: "150%",
          backgroundColor: Colors.background,
          opacity: ".2",
          transform: "rotate(-315deg) translateY(0%) translateX(-80%)",
          transition: "transform 175ms",
        },
        ":hover": {
          ":after": {
            transform: "rotate(-315deg) translateY(0%) translateX(-60%)"
          }
        },
        ":active, :focus": {
          transform: "scaleY(.95)"
        },
      },
      ({ open }) => ({
        transform: open ? "scale(3)" : "scale(1)"
      })
    );

    const Title = glamorous.h2({
      fontSize: "1rem",
      color: Colors.background,
      fontWeight: "300",
    });

    const StyledLink = glamorous(Link)({
      textDecoration: "none"
    })

    return (
      <StyledLink to={this.props.projectLink}>
        <CardOuter open={this.state.open}>
          <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
            <Title>{this.props.projectName}</Title>
            {this.props.children}
          </glamorous.Div>
        </CardOuter>
      </StyledLink>
    );
  }
}

export default Card;
