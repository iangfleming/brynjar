import React from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

const Tile = (props) => {
  const TileOuter = glamorous.div({
    flexGrow: props.grow,
    // minWidth: "20vw",
    height: "20rem",
    border: "1px solid black",
  });
  return (
    <TileOuter>
    </TileOuter>
  )
};
export default Tile;