import React, { Component } from "react";
import glamorous from "glamorous";
import { css } from "glamor";

class Animate extends Component {
  state = {
    open: false
  }
  componentDidMount() {
    this.setState({ open: true })
  }
  render() {
    const animationStyles = props => {
      const slide = css.keyframes({
        "0%": {transform: `translateX(-100%)`},
        "100%": {transform: `translateX(0%)`}
      })
      return {animation: `${slide} 175ms`}
    };

    const AnimationDiv = glamorous.div(animationStyles);

    return (
      <AnimationDiv
        open={this.state.open}
      >
        {this.props.children}
      </AnimationDiv>
    )
  }
};

export default Animate;