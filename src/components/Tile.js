import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

const Tile = (props) => {
  const StyledLink = glamorous(Link)({
    textDecoration: "none",
    display: "flex",
    justifyContent: `flex-${props.x}`,
    alignItems: `flex-${props.y}`,
    position: "relative",
    height: "20rem",
    width: props.size ? `${props.size - 1}%` : "24%",
    background: props.image ? `url(${props.image})` : Colors.pink,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "2rem",
    padding: "2rem",
  });
  const Title = glamorous.h2({
    color: props.color ? props.color : "white",
  });
  return (
    <StyledLink to={props.link}>
        <Title>{props.name}</Title>
    </StyledLink>
  );
};
export default Tile;