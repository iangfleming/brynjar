import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import {
  Hero,
  HeroTitle,
  HeroDesc,
  Content,
  SectionTitle,
  FullWidth
} from "../components/ProjectLayout";

class Japan extends Component {
  render() {
    return (
      <div>
        <p>
          I was scared. We were boarding flight AA27 LAX -> Tokyo. In a few hours we would be far far from home.
        </p>
        <p>
          As a child I have visited and lived in many place but since reaching adulthood I have stayed mostly in the U.S.
        </p>
        <p>
          Will I be able to communicate?
        </p>
        <p>
          I hate to be an inconvience to others. And more than that I hate and fear embarassment.
        </p>
        <p>
          Honestly, not sure why I'm sharing this. It feels good to get off my chest though.
        </p>
        <p>
          Our plan was to head south to the Seto Inland Sea and then work our way back north to Tokyo.
        </p>
        <p>
        </p>
      </div>
    );
  }
}

export default Japan;
