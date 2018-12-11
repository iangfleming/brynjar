import React from "react";
import { Link } from "react-router-dom";
import glamorous from "glamorous";
import Colors from "../vars/Colors";
import Sizes from "../vars/Sizes";

const styles = {
  position: "relative",
  color: Colors.text,
  fontSize: Sizes.head,
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "5px",
  "::before": {
    content: `''`,
    position: "absolute",
    bottom: 0,
    left: 0,
    background: Colors.pink,
    width: "100%",
    height: "21px",
    zIndex: -1,
    transition: "all 70ms",
    transformOrigin: "bottom"
  },
  ":hover::before": {
    transform: "translateY(-5px) scaleY(2)"
  }
};
const StyledA = glamorous.a({
  ...styles
});
const StyledLink = glamorous(Link)({
  ...styles
});

const ShadowLink = props => {
  if (props.href)
    return (
      <StyledA href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </StyledA>
    );
  else return <StyledLink to={props.to}>{props.children}</StyledLink>;
};
export default ShadowLink;
