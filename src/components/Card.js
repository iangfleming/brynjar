import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import camelToDash from "../utils/camelToDash";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";

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
        height: "8rem",
        width: "100vw",
        padding: "3rem 2rem",
        marginBottom: "-26px",
        backgroundColor: this.props.projectColor,
        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
        overflow: "hidden",
        transition: "transform 175ms",
        [MediaQueries.md]: {
          height: "10rem",
        },
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
    const Desc = glamorous.p({
      color: "white"
    })
    const StyledLink = glamorous(Link)({
      textDecoration: "none"
    })

    return (
      <StyledLink to={this.props.projectLink}>
        <CardOuter open={this.state.open}>
          <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
            <Title>{this.props.projectName}</Title>
            <Desc>{this.props.projectDescription}</Desc>
            {this.props.children}
          </glamorous.Div>
        </CardOuter>
      </StyledLink>
    );
  }
}

export default Card;
