import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import glamorous from "glamorous";
import Tile from "../components/Tile";
import memories from "../memories";
import MediaQueries from "../vars/MediaQueries";

class Life extends Component {
  state = {up: false};
  render() {
    const LifeContent = glamorous.div({
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between",
      maxWidth: "1000px",
      margin: "1rem auto",
      padding: "0 2rem",
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
          onStart={() => this.setState({up: false})}
          onRest={() => this.setState({up: true})}
        >
          {styles => (
            <animated.div
              className="life"
              style={{
                background: "white",
                minHeight: "100%",
                clipPath: "polygon(0 9%, 100% 0%, 100% 100%, 0% 100%)",
                willChange: "transform",
                ...styles
              }}
            >
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: this.state.up ? 1 : 0 }}
                config={config.stiff}
                native
              >
                {styles => (
                  <animated.div style={{...styles}}>
                    <LifeContent>
                      {memoriesArray.map(Memory => {
                        const path = `/life/${Memory.slug}`;
                        return <Tile link={path} {...Memory} />;
                      })}
                    </LifeContent>
                  </animated.div>
                )}
              </Spring>
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
