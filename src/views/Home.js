/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { Spring, Keyframes, animated, interpolate, config } from "react-spring";
import { withRouter } from "react-router-dom";
import Work from "./Work";
import Life from "./Life";
import Logo from "../components/Logo";
import glamorous from "glamorous";
import Color from "color";
import Colors from "../vars/Colors";
import MediaQueries from "../vars/MediaQueries";

const workPanelMutedColor = Color(Colors.pink).hex();
const lifePanelMutedColor = Color(Colors.teal).fade(5).lighten(.2).hex();
const WorkPanel = Keyframes.Spring({
  home: { width: "50vw", background: Colors.pink },
  work: { width: "95vw", background: workPanelMutedColor },
  life: { width: "5vw", background: workPanelMutedColor }
});
const LifePanel = Keyframes.Spring({
  home: { width: "50vw", background: Colors.teal },
  work: { width: "5vw", background: lifePanelMutedColor },
  life: { width: "95vw", background: lifePanelMutedColor }
});
const panelSpringConfig = {
  tension: 150,
  friction: 10
};
class Home extends Component {
  state = { panel: "home" };
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
      this.setState({ direction });
    }
    if (direction === "right" && this.state.panel === "home") {
      this.setState({ direction });
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
      this.setState({ panel });
    } else if (this.state.panel !== panel) {
      this.props.history.push("/");
      this.setState({ panel: "home" });
    }
  };
  render() {
    const {
      panel,
      workContentHidden,
      lifeContentHidden
    } = this.state;
    const home = this.state.panel === "home";
    const work = this.state.panel === "work";
    const life = this.state.panel === "life";
    return (
      <glamorous.Div display="flex" position="relative">
        <Logo panel={this.state.panel} direction={this.state.direction} />
        <WorkPanel
          state={panel}
          config={panelSpringConfig}
          native
          onStart={() =>
            home ? this.setState({ workContentHidden: false }) : null
          }
        >
          {styles => (
            <animated.div
              style={{
                ...styles,
                minHeight: "100vh",
                cursor: work ? "auto" : "pointer"
              }}
              onClick={() => this.handlePanelClick("work")}
              onMouseOver={() => this.handleHover("left")}
            >
              <Spring
                from={{ Y: 60, opacity: 1 }}
                to={{ Y: work ? 0 : 60, opacity: work ? 0 : 1 }}
                onRest={() =>
                  work ? this.setState({ lifeContentHidden: true }) : null
                }
                native
              >
                {styles => (
                  <animated.div
                    style={{
                      display: workContentHidden ? "none" : "block",
                      margin: "3rem",
                      opacity: life ? 0 : 1,
                      transform: styles.Y.interpolate(
                        Y => `translateY(${Y}vmin)`
                      )
                    }}
                  >
                    <glamorous.H2>Work</glamorous.H2>
                    <animated.p>
                      I’m a designer and developer.
                      <br />
                      Here are some highlights from my career
                      <br />
                      <em>Beta; still in development</em>
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
            home ? this.setState({ lifeContentHidden: false }) : null
          }
          native
        >
          {styles => (
            <animated.div
              style={{
                ...styles,
                minHeight: "100vh",
                cursor: life ? "auto" : "pointer"
              }}
              onClick={() => this.handlePanelClick("life")}
              onMouseOver={() => this.handleHover("right")}
            >
              <Spring
                from={{ Y: 60, opacity: 1 }}
                to={{ Y: !home ? 0 : 60, opacity: !home ? 0 : 1 }}
                onRest={() =>
                  life ? this.setState({ workContentHidden: true }) : null
                }
                native
              >
                {styles => (
                  <animated.div
                    style={{
                      display: lifeContentHidden ? "none" : "block",
                      margin: "3rem",
                      opacity: work ? 0 : 1,
                      transform: styles.Y.interpolate(
                        Y => `translateY(${Y}vmin)`
                      )
                    }}
                  >
                    <h2>Life</h2>
                    <animated.p>
                      Call it a blog or whatever you like.
                      <br />
                      These are the public records of my experiences.
                      <br />
                      <em>Coming soon</em>
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
