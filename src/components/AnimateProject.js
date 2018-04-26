import React, { Component } from "react";
import glamorous from "glamorous";
import { css } from "glamor";

class AnimateProject extends Component {
  render() {
    const animationStyles = props => {
      const popIn = css.keyframes({
        "0%": { transform: `scale(.8)`, opacity: `0` },
        "100%": { transform: `scale(1)`, opacity: `1` }
      });
      if(this.props.match) {
        return { 
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "100",
          animation: `${popIn} 175ms`
        };
      }
    };

    const AnimationDiv = glamorous.div(animationStyles);

    return (
      <AnimationDiv>{this.props.children}</AnimationDiv>
    );
  }
}

export default AnimateProject;