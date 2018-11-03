import React, { Component } from "react";
import { Trail, animated, config } from "react-spring";
import glamorous from "glamorous";
import Tile from "../components/Tile";
import memories from "../memories";

class Life extends Component {
  render() {
    const memoriesArray = Object.values(memories);
    // const memoriesArray = Array.from(Array(19).keys());;
    if (this.props.active) {
      return (
        <div className="life">
          <glamorous.Div
            display="flex"
            flexFlow="row wrap"
            alignItems="stretch"
            justifyContent="space-around"
            margin="1rem 0"
            overflow="hidden"
          >
            <Trail
              from={{ Y: 100 }}
              to={{ Y: 0 }}
              keys={memoriesArray.map(project => project.key)}
              delay="500"
              native
            >
              {memoriesArray.map((Memory, idx) => ({ Y }) => {
                // const path = `/work/${Memory.slug}`;
                return (
                  <React.Fragment>
                    <animated.div
                      key={idx}
                      style={{
                        transform: Y.interpolate(Y => `translateY(${Y}vh)`)
                      }}
                    >
                      <Tile
                        grow={Memory.grow}
                        // MemoryLink={path}
                        // MemoryName={Memory.name}
                        // MemoryDescription={Memory.description}
                        // MemoryColor={Memory.color}
                        // MemoryImage={Memory.image}
                      />
                    </animated.div>
                  </React.Fragment>
                );
              })}
            </Trail>
          </glamorous.Div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Life;
