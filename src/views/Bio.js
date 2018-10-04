import React, { Component } from "react";
import glamorous from "glamorous";
import ian from "../images/jonathan-portrait-ian.jpg";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";
import MediaQueries from "../vars/MediaQueries";

class Bio extends Component {
  render() {
    const BigText = glamorous.h2({
      fontSize: "25vw",
      fontStyle: "italic",
      whiteSpace: "nowrap",
      margin: "0",
      padding: "0",
      [MediaQueries.lg]: {
        fontSize: "15rem"
      }
    });
    const Container = glamorous.div({
      maxWidth: Sizes.maxWidth,
      margin: "0 auto",
      padding: "0 1rem",
      [MediaQueries.md]: {
        padding: "0 3rem"
      }
    });
    const Row = glamorous.div({
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem"
    });
    return (
      <div>
        <glamorous.Div textAlign="center">
          <BigText>Hey Y'all!</BigText>
          <glamorous.Div position="absolute" top="8rem" left="0" right="0" zIndex="-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 250" height="20rem">
              <g data-name="Layer 2">
                <path
                  opacity=".8"
                  fill={Colors.green}
                  d="M434 0a97 97 0 0 0-14 2 59 59 0 0 0-11 3 72 72 0 0 0-11 5l-2 2a81 81 0 0 0-8 5l-16 12-26 21-12 8a188 188 0 0 1-20 12 59 59 0 0 1-12 3 170 170 0 0 1-22 0h-12l-9-1-33-4-7-1-8-2-16-3-30-7c-5-2-11-3-16-3a79 79 0 0 0-16 0l-10 1a80 80 0 0 0-11 3 84 84 0 0 0-9 3 122 122 0 0 0-15 8 103 103 0 0 0-14 11 55 55 0 0 0-11 13l-15 21a22 22 0 0 1-5 5l-11 9a132 132 0 0 0-17 18 60 60 0 0 0-5 9 112 112 0 0 0-6 14 73 73 0 0 0-3 10 70 70 0 0 0-1 17 69 69 0 0 0 2 14 60 60 0 0 0 4 9 38 38 0 0 0 3 5 47 47 0 0 0 9 11 67 67 0 0 0 13 8 85 85 0 0 0 14 6 86 86 0 0 0 16 2 65 65 0 0 0 11 0 115 115 0 0 0 16-2 65 65 0 0 0 10-3 152 152 0 0 0 16-8l11-6a173 173 0 0 0 16-12l7-6 6-6 26-25a115 115 0 0 1 8-8 84 84 0 0 1 14-8 78 78 0 0 1 14-4h67c22 0 43-4 64-7l7-1 8-1h22l9-1 5-1 16-2a96 96 0 0 0 19-5 115 115 0 0 0 18-9l7-5a81 81 0 0 0 14-11l17-22a79 79 0 0 0 5-13 62 62 0 0 0 3-11 61 61 0 0 0 1-14 71 71 0 0 0-3-14 75 75 0 0 0-5-12 58 58 0 0 0-8-12 69 69 0 0 0-11-9 53 53 0 0 0-12-7 50 50 0 0 0-10-3 70 70 0 0 0-13-1h-2z"
                  data-name="Draw Layer"
                />
              </g>
            </svg>
          </glamorous.Div>
        </glamorous.Div>
        <Container>
          <glamorous.Div>
            <Row>
              <glamorous.Img
                src={ian}
                alt="ian fleming bio photo"
                width="auto"
                height="200px"
                marginRight="1rem"
              />
              <div>
                <glamorous.P>
                  I am Ian Fleming, a designer and a developer. My passion is
                  for the ideation and problem solving of design. The
                  development skills I have are a result of needing to implement
                  my own designs.
                </glamorous.P>
                <glamorous.P>
                  For as long as I can remember I've observed the inefficiencies
                  and missed opportunities in the world around me. The logical
                  conclusion was to learn how to help resolve them. This desire
                  is key to my personality. A big part of me.
                </glamorous.P>
              </div>
            </Row>
            <glamorous.P>
              Having me on your team means questioning assumptions, dreaming
              big, and building fast.
            </glamorous.P>
          </glamorous.Div>
        </Container>
      </div>
    );
  }
}

export default Bio;
