import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import images from "../images/pano/";
const Plaque = glamorous.div({
  height: "80vh",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center"
});
const Title = glamorous.h2({
  marginRight: "5rem",
  letterSpacing: "4px",
});
const Desc = glamorous.p({
  width: "20rem",
});
const Figure = glamorous.figure({
  height: "100vh",
  background: "black",
  margin: 0,
  display: "flex",
  alignItems: "center",
  textAlign: "right",
});
const StyledImg = glamorous.img({
  width: "100vw"
});
const FigCaption = glamorous.figcaption({
  fontSize: Sizes.sub,
  fontStyle: "italic",
  color: "white",
  paddingTop: "1rem",
  paddingRight: "4rem",
});
const Pano = props => {
  const imagesArray = Object.values(images);
  return (
    <React.Fragment>
      <Plaque>
        <Title>pan•o•ram•a</Title>
        <Desc>
          <p>
            Over the past five years I've made a point of taking panoramic
            photos whenever I find a particularly captivating viewpoint.
          </p>
          <p>
            There is something special about a panorama. When I look at these I
            am transported back to that time and place.
          </p>
          <p>
            It feels so vivid.
          </p>
        </Desc>
      </Plaque>
      {imagesArray.map(image => (
        <Figure>
          <div>
            <StyledImg src={image.image} />
            <FigCaption>{image.caption}</FigCaption>
          </div>
        </Figure>
      ))}
    </React.Fragment>
  );
};
export default Pano;
