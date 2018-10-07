/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { Spring, Keyframes, animated, interpolate, config } from "react-spring";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Work from "./views/Work";
import Life from "./views/Life";
import glamorous from "glamorous";
import Colors from "./vars/Colors";

const Logo = Keyframes.Spring({
  home: { to: { x: 40, y: 10, scale: 1, angle: 0 } },
  work: { to: { x: 355, y: -25, scale: 0.25, angle: 90 } },
  life: { to: { x: -35, y: 15, scale: 0.25, angle: -90 } }
});
const WorkPanel = Keyframes.Spring({
  home: { to: { width: "50vw" } },
  work: { to: { width: "95vw" } },
  life: { to: { width: "5vw" } }
});
const LifePanel = Keyframes.Spring({
  home: { to: { width: "50vw" } },
  work: { to: { width: "5vw" } },
  life: { to: { width: "95vw" } }
});

class App extends Component {
  state = {
    panel: "home",
    lY: 0,
    rY: 0
  };
  handleHover = direction => {
    if (direction === "left" && this.state.panel === "home") {
      this.setState({ lY: 30, rY: 0 });
    }
    if (direction === "right" && this.state.panel === "home") {
      this.setState({ lY: 0, rY: 30 });
    }
  };
  handlePanelClick = panel => {
    this.setState({ panel: panel, lY: 0, rY: 0 });
  };
  render() {
    const { panel } = this.state;
    return (
      <BrowserRouter>
        <glamorous.Div display="flex" position="relative">
          <Logo state={panel} native>
            {({ x, y, scale, angle }) => (
              <animated.svg
                style={{
                  float: "right",
                  width: "328px",
                  height: "187px",
                  position: "absolute",
                  overflow: "visible",
                  transform: interpolate(
                    [x, y, scale],
                    (x, y, scale) => `scale(${scale}) translate(${x}vw, ${y}vh)`
                  )
                }}
              >
                <animated.g
                  style={{
                    transform: angle.interpolate(angle => `rotate(${angle}deg)`)
                  }}
                  fill="#271924"
                  fill-rule="evenodd"
                >
                  <Spring
                    from={{ lY: 0, rY: 0 }}
                    to={{ lY: this.state.lY, rY: this.state.rY }}
                    native
                  >
                    {({ lY, rY }) => (
                      <React.Fragment>
                        <animated.path
                          style={{
                            transform: lY.interpolate(
                              lY => `translateY(${lY}vh)`
                            )
                          }}
                          d="M0 184V4c0-1 1-2 3-2h10c2 0 2 1 2 2v180c0 2 0 3-2 3H3c-2 0-3-1-3-3M112 0h-5c-2 0-3 1-3 3L39 182c-1 2 0 3 2 3h10c2 0 3-1 4-3l8-23 48-134h1"
                        />
                        <animated.g
                          style={{
                            transform: rY.interpolate(
                              rY => `translateY(${rY}vh)`
                            )
                          }}
                        >
                          <path d="M110 25h1l51 146 5 12c0 1 1 2 3 2h11c2 0 2-1 2-2L118 3c0-2-1-3-3-3h-5M203 5c0-2 0-3 2-3h10c2 0 4 1 5 3l92 152h1V5c0-2 1-3 3-3h10c1 0 2 1 2 3v179c0 2-1 3-2 3h-11c-2 0-4-1-5-3L219 32h-1v152c0 2-1 3-3 3h-10c-2 0-2-1-2-3V5z" />
                        </animated.g>
                      </React.Fragment>
                    )}
                  </Spring>
                </animated.g>
              </animated.svg>
            )}
          </Logo>
          <WorkPanel state={panel} native>
            {styles => (
              <animated.div
                style={{
                  ...styles,
                  background: Colors.yellow,
                  height: "100vh"
                }}
                onClick={() => this.handlePanelClick("work")}
                onMouseOver={() => this.handleHover("left")}
              >
                <Work panelKey={panel} />
              </animated.div>
            )}
          </WorkPanel>
          <LifePanel state={panel} native>
            {styles => (
              <animated.div
                style={{ ...styles, background: Colors.teal, height: "100vh" }}
                onClick={() => this.handlePanelClick("life")}
                onMouseOver={() => this.handleHover("right")}
              >
                <Life panelKey={panel} />
              </animated.div>
            )}
          </LifePanel>
        </glamorous.Div>
      </BrowserRouter>
    );
  }
}

export default App;
