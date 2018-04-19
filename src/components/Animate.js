import React, { Component } from "react";
import glamorous from "glamorous";
import { css } from "glamor";

class Animate extends Component {
  state = {
    open: false
  };
  componentDidMount() {
    this.setState({ open: true });
  }
  componentWillUnmount() {
    this.setState({ open: false });
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
      const slide = this.props.match.url.includes("life")
        ? slideLeft
        : slideRight;
      return { animation: `${slide} 175ms` };
    };

    const AnimationDiv = glamorous.div(animationStyles);

    return (
      <AnimationDiv open={this.state.open}>{this.props.children}</AnimationDiv>
    );
  }
}

export default Animate;
