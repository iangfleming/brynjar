import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";

const Plaque = glamorous.div({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center"
});
const Title = glamorous.h2({});
const Desc = glamorous.p({});
const r3 = props => {
  return (
    <React.Fragment>
      <glamorous.Div margin="0 auto" maxWidth={Sizes.maxWidth}>
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
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </glamorous.Div>
      </glamorous.Div>
      <Plaque>
        <Title>Beat the Clock presents Red Rock Roubaix the Third</Title>
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
          <p />
        </Desc>
      </Plaque>
    </React.Fragment>
  );
};
export default r3;
