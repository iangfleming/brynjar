import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import * as images from "../images/pano/";
const StyledImg = glamorous.img({
  width: "10rem"
})
const Pano = (props) => {
  const imagesArray = Object.values(images)
  return (
    imagesArray.map(image => (
      <StyledImg src={image} />
    ))
  );
};
export default Pano;
