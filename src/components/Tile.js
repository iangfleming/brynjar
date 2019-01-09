import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";
import MediaQueries from "../vars/MediaQueries";

const Tile = (props) => {
  const SharedStyles = {
    display: "flex",
    justifyContent: `flex-${props.x}`,
    alignItems: `flex-${props.y}`,
    position: "relative",
    height: "20rem",
    background: props.image ? `url(${props.image})` : Colors.pink,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "2rem",
    padding: "2rem",
    width: "100%",
    [MediaQueries.md]: {
      width: props.size ? `${props.size - 2}%` : "24%",
      minWidth: "195px",
    }
  }
  const DisabledTile = glamorous.div({
    ...SharedStyles,
    "::after": {
      content: `''`,
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
      background: "black",
      opacity: ".5",
    }
  });
  const OverlayTitle = glamorous.h2({
    position: "absolute",
    top: 0,
    left: "2rem",
    zIndex: 1,
    color: "white",
    fontWeight: 200,
    fontStyle: "italic",
  })
  const StyledLink = glamorous(Link)({
    textDecoration: "none",
    ...SharedStyles
  });
  const Title = glamorous.h2({
    color: props.color ? props.color : "white",
  });
  let el;
  if (props.disabled) {
    return (
      <DisabledTile>
          <OverlayTitle>Coming Soon</OverlayTitle>
          <Title>{props.name}</Title>
      </DisabledTile>
    )
  } else {
    return (
      <StyledLink to={props.link}>
          <Title>{props.name}</Title>
      </StyledLink>
    )
  }
  return (el);
};
export default Tile;