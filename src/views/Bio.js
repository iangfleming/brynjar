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
            Thought experiments (Gedankenexperimenten) are “facts” in the sense
            that they have a “real life” correlate in the form of electrochemical
            activity in the brain. But it is quite obvious that they do not relate
            to facts “out there”. They are not true statements. But do they lack
            truth because they do not relate to facts? How are Truth and Fact
            interrelated? One answer is that Truth pertains to the possibility
            that an event will occur. If true – it must occur and if false – it
            cannot occur. This is a binary world of extreme existential
            conditions. Must all possible events occur? Of course not. If they do
            not occur would they still be true? Must a statement have a real life
            correlate to be true?
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
