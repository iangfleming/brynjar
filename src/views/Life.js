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
            justifyContent="space-between"
            margin="1rem 0"
            overflow="hidden"
          >
          {/* <glamorous.P fontStyle="italic">Coming soon.</glamorous.P> */}
            <Trail
              from={{ Y: 100 }}
              to={{ Y: 0 }}
              items={memoriesArray}
              delay="500"
              native
            >
              {(Memory, i) => ({ Y }) => {
                const path = `/life/${Memory.slug}`;
                return (
                  <React.Fragment>
                    <animated.div
                      key={i}
                      style={{
                        transform: Y.interpolate(Y => `translateY(${Y}vh)`),
                        minWidth: "32%"
                      }}
                    >
                      <Tile
                        // grow={Memory.grow}
                        link={path}
                        name={Memory.name}
                        // MemoryDescription={Memory.description}
                        // MemoryColor={Memory.color}
                        // MemoryImage={Memory.image}
                      />
                    </animated.div>
                  </React.Fragment>
                );
              }}
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
