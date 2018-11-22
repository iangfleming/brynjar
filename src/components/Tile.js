import React from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

const Tile = (props) => {
  const TileOuter = glamorous.div({
    // flexGrow: props.grow,
    height: "20rem",
    // border: "1px solid black",
    background: "#00DAE2",
    boxShadow: `0 0 45px 0 ${Colors.teal} inset`,
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