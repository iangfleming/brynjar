import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import glamorous from "glamorous";
import Tile from "../components/Tile";
import memories from "../memories";

class Life extends Component {
  render() {
    const memoriesArray = Object.values(memories);
    if (this.props.active) {
      return (
        <Spring
          from={{ transform: "translateY(100%)" }}
          to={{ transform: "translateY(0%)" }}
          delay="500"
          native
        >
          {styles => (
            <animated.div
              className="life"
              style={{
                background: "white",
                display: "flex",
                flexFlow: "row wrap",
                minHeight: "100%",
                margin: "0 -5vw",
                clipPath: "polygon(0 9%, 100% 0%, 100% 100%, 0% 100%)",
                // why isn't this working (fix)
                padding: "0 -5vw",
                // alignItems="stretch"
                // justifyContent="space-between"
                // margin="1rem 0"
                ...styles
              }}
            >
              {memoriesArray.map(Memory => {
                const path = `/life/${Memory.slug}`;
                return <Tile link={path} name={Memory.name} />;
              })}
            </animated.div>
          )}
        </Spring>
      );
    } else {
      return null;
    }
  }
}

export default Life;
