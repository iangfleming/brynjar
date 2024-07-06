import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import ProjectBackBtn from "../components/ProjectBackBtn";
import images from "../images/film/";
import {
  Hero,
  HeroTitle,
  HeroDesc,
  Content,
  SectionTitle,
  FullWidth
} from "../components/ProjectLayout";

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

const film = props => {
  const imagesArray = Object.values(images);
  return (
    <React.Fragment>
      <ProjectBackBtn absolute />
      <Plaque>
        <div>
        <Title>FILM</Title>
        <Desc>
          <p>
            After my grandfather passed away I came into possesion of his little 35mm Olympus Stylus point and shoot.
            He used to take it everwhere with him documenting his adventures. It's not the best quality but it has a lovely ease of use.
            I've gotten used to just throwing it in my bag whereever I go.
          </p>
          <p>
            Here's a few of my favs.
          </p>
        </Desc>
      </div>
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

export default film;
