import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import glamorous from "glamorous";
import Tile from "../components/Tile";
import memories from "../memories";
import MediaQueries from "../vars/MediaQueries";

class Life extends Component {
  render() {
    const LifeContent = glamorous.div({
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      maxWidth: "1000px",
      margin: "1rem auto",
      paddingTop: "180px",
      [MediaQueries.md]: {
        paddingTop: "150px"
      }
    });
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
                minHeight: "100%",
                clipPath: "polygon(0 9%, 100% 0%, 100% 100%, 0% 100%)",
                ...styles
              }}
            >
              <LifeContent>
                {memoriesArray.map(Memory => {
                  const path = `/life/${Memory.slug}`;
                  return <Tile link={path} {...Memory} />;
                })}
              </LifeContent>
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
