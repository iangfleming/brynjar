import React, { Component } from "react";
import glamorous from "glamorous";
import { css } from "glamor";

class Animate extends Component {
  state = {
    animation: true
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url === this.props.match.url) {
      this.setState({ animation: false })
    } else {
      this.setState({ animation: true })
    }
  }
  render() {
    const animationStyles = props => {
      const slideRight = css.keyframes({
        "0%": { transform: `translateX(-100%)` },
        "100%": { transform: `translateX(0%)` }
      });
      const slideLeft = css.keyframes({
        "0%": { transform: `translateX(100%)` },
        "100%": { transform: `translateX(0%)` }
      });
      if(this.state.animation) {
        const slide = this.props.match.url.includes("life")
          ? slideLeft
          : slideRight;
        return { animation: `${slide} 175ms` };
      }
    };

    const AnimationDiv = glamorous.div(animationStyles);

    return (
      <AnimationDiv>{this.props.children}</AnimationDiv>
    );
  }
}

export default Animate;
