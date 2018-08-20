import React, { Component } from "react";
import glamorous from "glamorous";
import ian from "../images/jonathan-portrait-ian.jpg";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

class Bio extends Component {
  render() {
    return (
      <div>
        {/* <glamorous.Div
          height="5rem"
          width="100vw"
          background={Colors.gray2}
          top="50%"
          zIndex="1"
        >
        </glamorous.Div> */}
        <glamorous.H2
          fontSize="25vw"
          fontStyle="italic"
          whiteSpace="nowrap"
          margin="0"
          padding="0"
        >
          Hey Y'all!
        </glamorous.H2>
        <glamorous.Div
          display="flex"
          flexFlow="row wrap"
          justifyContent="space-between"
          margin="-2rem 2rem 0 2rem"
          padding="1rem"
          maxWidth={Sizes.maxWidth}
          background={Colors.gray3}
          zIndex="2"
        >
          <glamorous.Div>
            <glamorous.Img
              src={ian}
              alt="ian fleming bio photo"
              width="auto"
              height="400px"
            />
          </glamorous.Div>
          <glamorous.Div maxWidth="25rem">
              <glamorous.P>
              I am Ian Fleming, a designer and a developer. My passion is for
              the ideation and problem solving of design. The development skills
              I have are a result of needing to implement my own designs.
            </glamorous.P>
            <glamorous.P>
              For as long as I can remember I've observed the inefficiencies and
              missed opportunities in the world around me. The logical
              conclusion was to learn how to help resolve them. This desire is
              key to my personality. A big part of me.
            </glamorous.P>
            <glamorous.P>
              Having me on your team means questioning assumptions, dreaming
              big, and building fast.
            </glamorous.P>
          </glamorous.Div>
          <glamorous.Div>
            <glamorous.Img
              src={ian}
              alt="ian fleming bio photo"
              width="auto"
              height="400px"
            />
          </glamorous.Div>
        </glamorous.Div>
      </div>
    );
  }
}

export default Bio;
