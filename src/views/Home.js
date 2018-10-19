/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { Spring, Keyframes, animated, interpolate, config } from "react-spring";
import { withRouter } from "react-router-dom";
import Work from "./Work";
import Life from "./Life";
import glamorous from "glamorous";
import Colors from "../vars/Colors";

const Logo = Keyframes.Spring({
  home: { to: { x: 0, y: 10, scale: 1, angle: 0 } },
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
const panelSpringConfig = {
  tension: 150,
  friction: 10
};
const logoSpringConfig = {
  tension: 30,
  friction: 2
};
class Home extends Component {
  state = {
    panel: "home",
    lY: 0,
    rY: 0
  };
  componentWillMount() {
    if (this.props.location.pathname.includes("work")) {
      this.setState({ panel: "work" });
    }
    if (this.props.location.pathname.includes("life")) {
      this.setState({ panel: "life" });
    }
  }
  handleHover = direction => {
    if (direction === "left" && this.state.panel === "home") {
      this.setState({ lY: 50, rY: 0 });
    }
    if (direction === "right" && this.state.panel === "home") {
      this.setState({ lY: 0, rY: 50 });
    }
  };
  handlePanelClick = panel => {
    if (this.state.panel === "home") {
      if (panel === "work") {
        this.props.history.push("/work");
      }
      if (panel === "life") {
        this.props.history.push("/life");
      }
      this.setState({ panel, lY: 0, rY: 0 });
    } else if (this.state.panel !== panel) {
      this.props.history.push("/");
      this.setState({ panel: "home", lY: 0, rY: 0 });
    }
  };
  render() {
    const { panel, workContentVisible, lifeContentVisible } = this.state;
    const home = this.state.panel === "home";
    const work = this.state.panel === "work";
    const life = this.state.panel === "life";
    return (
      <glamorous.Div display="flex" position="relative">
        <Spring
          from={{ opacity: 1 }}
          to={{ opacity: this.state.panel !== "home" ? 0 : 1 }}
          native
        >
          {styles => (
            <animated.svg
              style={{
                ...styles,
                float: "right",
                width: "328px",
                height: "187px",
                position: "fixed",
                left: "50%",
                marginLeft: "-111px",
                overflow: "visible"
              }}
            >
              <g fill="#271924" fill-rule="evenodd">
                <Spring
                  from={{ lY: 0, rY: 0 }}
                  to={{ lY: this.state.lY, rY: this.state.rY }}
                  config={logoSpringConfig}
                  native
                >
                  {({ lY, rY }) => (
                    <React.Fragment>
                      <animated.path
                        style={{
                          transform: lY.interpolate(
                            lY => `translateY(-${lY}px)`
                          )
                        }}
                        d="M0 184V4c0-1 1-2 3-2h10c2 0 2 1 2 2v180c0 2 0 3-2 3H3c-2 0-3-1-3-3M112 0h-5c-2 0-3 1-3 3L39 182c-1 2 0 3 2 3h10c2 0 3-1 4-3l8-23 48-134h1"
                      />
                      <animated.g
                        style={{
                          transform: rY.interpolate(
                            rY => `translateY(-${rY}px)`
                          )
                        }}
                      >
                        <path d="M110 25h1l51 146 5 12c0 1 1 2 3 2h11c2 0 2-1 2-2L118 3c0-2-1-3-3-3h-5M203 5c0-2 0-3 2-3h10c2 0 4 1 5 3l92 152h1V5c0-2 1-3 3-3h10c1 0 2 1 2 3v179c0 2-1 3-2 3h-11c-2 0-4-1-5-3L219 32h-1v152c0 2-1 3-3 3h-10c-2 0-2-1-2-3V5z" />
                      </animated.g>
                    </React.Fragment>
                  )}
                </Spring>
              </g>
            </animated.svg>
          )}
        </Spring>
        <WorkPanel
          state={panel}
          config={panelSpringConfig}
          native
          onStart={() =>
            home ? this.setState({ lifeContentVisible: true }) : null
          }
        >
          {styles => (
            <animated.div
              style={{
                ...styles,
                background: Colors.yellow,
                height: "100vh",
                cursor: work ? "auto" : "pointer"
              }}
              onClick={() => this.handlePanelClick("work")}
              onMouseOver={() => this.handleHover("left")}
            >
              <Spring
                from={{ Y: 60, opacity: 1 }}
                to={{ Y: work ? 0 : 60, opacity: work ? 0 : 1 }}
                onRest={() => this.setState({ workContentVisible: false })}
                native
              >
                {styles => (
                  <animated.div
                    style={{
                      display: workContentVisible ? "auto" : "none",
                      margin: "3rem",
                      opacity: life ? 0 : 1,
                      transform: styles.Y.interpolate(Y => `translateY(${Y}vh)`)
                    }}
                  >
                    <glamorous.H2>Work</glamorous.H2>
                    <animated.p style={{ opacity: styles.opacity }}>
                      I’m a designer and developer. Here are some highlights
                      from my career
                    </animated.p>
                  </animated.div>
                )}
              </Spring>
              <Work active={work} />
            </animated.div>
          )}
        </WorkPanel>
        <LifePanel
          state={panel}
          config={panelSpringConfig}
          onStart={() =>
            home ? this.setState({ lifeContentVisible: true }) : null
          }
          native
        >
          {styles => (
            <animated.div
              style={{
                ...styles,
                background: Colors.teal,
                height: "100vh",
                cursor: life ? "auto" : "pointer"
              }}
              onClick={() => this.handlePanelClick("life")}
              onMouseOver={() => this.handleHover("right")}
            >
              <Spring
                from={{ Y: 60, opacity: 1 }}
                to={{ Y: !home ? 0 : 60, opacity: !home ? 0 : 1 }}
                onRest={() => this.setState({ lifeContentVisible: false })}
                native
              >
                {styles => (
                  <animated.div
                    style={{
                      display: lifeContentVisible ? "auto" : "none",
                      margin: "3rem",
                      opacity: work ? 0 : 1,
                      transform: styles.Y.interpolate(Y => `translateY(${Y}vh)`)
                    }}
                  >
                    <h2>Life</h2>
                    <animated.p style={{ opacity: styles.opacity }}>
                      Call it a blog or whatever you like. These are the public
                      records of my experiences.
                    </animated.p>
                  </animated.div>
                )}
              </Spring>
              <Life active={life} />
            </animated.div>
          )}
        </LifePanel>
      </glamorous.Div>
    );
  }
}

export default withRouter(Home);
