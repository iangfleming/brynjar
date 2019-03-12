import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import ProjectBackBtn from "../components/ProjectBackBtn";
import p1 from "../images/theShortcut/GC032431.JPG";

const Plaque = glamorous.div({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: Sizes.content,
  margin: "0 auto",
  padding: "0 2rem"
});
const Title = glamorous.h2({});
const Desc = glamorous.p({});
const StyledImg = glamorous.img({
  width: "100vw"
});
const TheShortcut = props => {
  return (
    <React.Fragment>
      <ProjectBackBtn absolute />
      <glamorous.Div margin="4rem auto" maxWidth={Sizes.maxWidth}>
        <glamorous.Div
          position="relative"
          padding-bottom="56.25%"
          height="0"
          margin="0"
          maxWidth={Sizes.maxWidth}
        >
          <glamorous.Iframe
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/289892193"
            border="0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </glamorous.Div>
      </glamorous.Div>
      <Plaque>
        <Title>The Shortcut</Title>
          <StyledImg href={p1}></StyledImg>
        <Desc>
          <p>
            In what has become everyone's favorite way to end the year, 70 or so
            people ride a large loop through small towns around Austin. Very
            much unsanctioned the route is between 110 and 120 miles depending
            on who you ask. It passes through Creedmore, Dale, Mcmahan, Red Rock
            (the namesake), Bastrop, Sayersville, Littig, Manor, and finally
            back to Austin.
          </p>
          <p>
            The past two iterations of this event have had unusually good
            weather but this year our luck ran out. The forecasted rain held off
            but we faced a steady 15+ mph headwind with gusts up to 25mph.
          </p>
          <p>
            I had intended to shoot a lot more video and maybe some interviews
            but weather and the resulting suffering put an end to that plan.
            What you see is what I got. Short clips here and there when my
            frozen fingers could find the shutter button.
          </p>
          <p>
            In a way this is probably a more accurate representation of
            endurance cycling. Your hands shake and your plans fall apart but at
            the end of the day all that matters is you did it.
          </p>
        </Desc>
      </Plaque>
    </React.Fragment>
  );
};
export default TheShortcut;
