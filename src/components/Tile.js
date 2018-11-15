import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

const Tile = (props) => {
  const TileOuter = glamorous.div({
    flexGrow: props.grow,
    // minWidth: "20vw",
    height: "20rem",
    border: "1px solid black",
  });
  const Title = glamorous.h2({
    color: "red"
  });
  const StyledLink = glamorous(Link)({
    textDecoration: "none"
  });
  return (
    <StyledLink to={props.link}>
      <TileOuter>
        <Title>{props.name}</Title>
      </TileOuter>
    </StyledLink>
  );
};
export default Tile;