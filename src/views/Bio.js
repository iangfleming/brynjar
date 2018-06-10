import React, { Component } from "react";
import glamorous from "glamorous";
import ian from "../images/jonathan-portrait-ian.jpg";
import Sizes from "../vars/Sizes";

class Bio extends Component {
  render() {
    return (
      <glamorous.Div
        display="flex"
        flexFlow="row wrap"
        justifyContent="space-between"
        margin="0 2rem"
        maxWidth={Sizes.maxWidth}
      >
        <glamorous.Div maxWidth="50%">
          <h2>Hey Y'all!</h2>
          <glamorous.P>
            I am Ian Fleming, a designer and a developer. My passion is for the ideation and
            problem solving of design. The development skills I have are a
            result of needing to implement my own designs.
          </glamorous.P>
          <glamorous.P>
            For as long as I can remember I've observed the inefficiencies and
            missed opportunities in the world around me. The logical conclusion
            was to learn how to help resolve them. This desire is key to my
            personality. A big part of me.
          </glamorous.P>
          <glamorous.P>
            Having me on your team means questioning all assumptions, dreaming
            big, and building fast.
          </glamorous.P>
        </glamorous.Div>
        <glamorous.Img
          src={ian}
          alt="ian fleming bio photo"
          width="auto"
          height="75vh"
        />
      </glamorous.Div>
    );
  }
}

export default Bio;
