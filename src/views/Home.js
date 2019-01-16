/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { Spring, Keyframes, animated, interpolate, config } from "react-spring";
import { withRouter } from "react-router-dom";
import Work from "./Work";
import Life from "./Life";
import Logo from "../components/Logo";
import glamorous from "glamorous";
import Colors from "../vars/Colors";
import MediaQueries from "../vars/MediaQueries";
import Sizes from "../vars/Sizes";
import { Content, BlockLink, SublteLink } from "../components/ProjectLayout";

const WorkPanel = Keyframes.Spring({
  home: { to: { width: "50vw" } },
  work: { to: { width: "100vw" } },
  life: { to: { width: "0vw" } }
});
const LifePanel = Keyframes.Spring({
  home: { to: { width: "50vw" } },
  work: { to: { width: "0vw" } },
  life: { to: { width: "100vw" } }
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
  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleTilt);
  }
  handleTilt = e => {
    // gamma is the left-to-right tilt in degrees, where right is positive
    const devicePos = e.gamma;
    // beta is the front-to-back tilt in degrees, where front is positive
    const tiltFB = e.beta;
    // alpha is the compass direction the device is facing in degrees
    const dir = e.alpha;
    if (devicePos < -5) {
      this.handleHover("left");
    }
    if (devicePos > 5) {
      this.handleHover("right");
    }
  };
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
    const { panel, workContentHidden, lifeContentHidden } = this.state;
    const home = this.state.panel === "home";
    const work = this.state.panel === "work";
    const life = this.state.panel === "life";
    const Title = glamorous.h2({
      fontSize: Sizes.superhead,
      marginTop: "5rem",
      marginRight: "5rem",
      pointerEvents: "none"
    });
    const Desc = glamorous.div({
      maxWidth: "400px",
      pointerEvents: home ? "none" : "auto",
      [MediaQueries.md]: {
        marginLeft: home ? 0 : "4rem"
      }
    });
    const Back = glamorous.button(({ work, life }) => ({
      height: "5rem",
      width: "5rem",
      background: work ? Colors.teal : Colors.pink,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      transition: "transform 75ms",
      ":focus": {
        outline: "none"
      },
      ":hover": {
        transform: "scale(1.05)"
      },
      ":active": {
        transform: "scale(1)"
      }
    }));
    const BackArrow = glamorous.svg(({ work, life }) => ({
      transform: `scale(1.5) rotate(${work ? "180deg" : "0"})`
    }));
    return (
      <glamorous.Div display="flex" position="relative">
        <Logo panel={this.state.panel} direction={this.state.direction} />
        {work ? (
          <Spring
            from={{ transform: "translateX(110vw)" }}
            to={{ transform: "translateX(0)" }}
            delay="500"
            native
          >
            {styles => (
              <animated.div
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "1rem",
                  zIndex: "2",
                  ...styles
                }}
              >
                <Back work onClick={() => this.handlePanelClick("right")}>
                  <BackArrow work width="16" height="14" viewBox="0 0 16 14">
                    <path d="M4.044 8.003l4.09 3.905-1.374 1.453-6.763-6.356L6.759.639 8.135 2.09 4.043 6.003h11.954v2H4.044z" />
                  </BackArrow>
                </Back>
              </animated.div>
            )}
          </Spring>
        ) : null}
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
                background: Colors.pink,
                minHeight: home ? "100vh" : "unset",
                margin: "0 auto",
                cursor: work ? "auto" : "pointer"
              }}
              onClick={() => this.handlePanelClick("work")}
              onMouseOver={() => this.handleHover("left")}
            >
              <Spring
                from={{ Y: 60, opacity: 0 }}
                to={{ Y: work ? 0 : 60, opacity: work ? 1 : 0 }}
                onRest={() =>
                  work ? this.setState({ lifeContentHidden: true }) : null
                }
                native
              >
                {styles => (
                  <animated.div
                    style={{
                      display: workContentHidden ? "none" : "block",
                      minHeight: "200px",
                      marginTop: "5rem",
                      opacity: life ? 0 : 1,
                      transform: styles.Y.interpolate(
                        Y => `translateY(${Y}vmin)`
                      )
                    }}
                  >
                    <Content maxWidth="1000px">
                      <glamorous.Div
                        display={work ? "flex" : "block"}
                        flexFlow="row wrap"
                      >
                        <Title>Work</Title>
                        <animated.p
                          style={{
                            display: home ? "initial" : "none"
                          }}
                        >
                          I’m a designer and developer.
                          <br />
                          Here are some highlights from my career
                        </animated.p>
                        <animated.div
                          style={{
                            opacity: styles.opacity,
                            display: !work ? "none" : "initial"
                          }}
                        >
                          <Desc>
                            <p>
                              I am a designer and developer in Austin, TX.
                              Formerly at the IBM
                              <SublteLink
                                href="https://www.carbondesignsystem.com/"
                                target="_blank"
                                css={{ paddingRight: 0 }}
                              >
                                Carbon Design System
                              </SublteLink>
                              . Currently at
                              <SublteLink
                                href="https://www.phobio.com/"
                                target="_blank"
                              >
                                Phobio.
                              </SublteLink>
                              I work designing great products and building
                              robust design systems.
                            </p>
                            <p>
                              If you're interested in working together feel free
                              to
                              <BlockLink
                                href="https://www.instagram.com/iangfleming/"
                                bg={Colors.teal}
                                css={{ marginRight: 0, color: Colors.text }}
                              >
                                email me
                              </BlockLink>
                              .
                            </p>
                          </Desc>
                        </animated.div>
                      </glamorous.Div>
                    </Content>
                  </animated.div>
                )}
              </Spring>
              <Work active={work} />
            </animated.div>
          )}
        </WorkPanel>
        {life ? (
          <Spring
            from={{ transform: "translateX(-10vw)" }}
            to={{ transform: "translateX(0)" }}
            delay="500"
            native
          >
            {styles => (
              <animated.div
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "1rem",
                  zIndex: "2",
                  ...styles
                }}
              >
                <Back life onClick={() => this.handlePanelClick("left")}>
                  <BackArrow width="16" height="14" viewBox="0 0 16 14">
                    <path d="M4.044 8.003l4.09 3.905-1.374 1.453-6.763-6.356L6.759.639 8.135 2.09 4.043 6.003h11.954v2H4.044z" />
                  </BackArrow>
                </Back>
              </animated.div>
            )}
          </Spring>
        ) : null}
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
                background: Colors.teal,
                minHeight: home ? "100vh" : "unset",
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
                      minHeight: "200px",
                      marginTop: "4rem",
                      opacity: work ? 0 : 1,
                      transform: styles.Y.interpolate(
                        Y => `translateY(${Y}vmin)`
                      )
                    }}
                  >
                    <Content maxWidth="1000px">
                      <glamorous.Div
                        display={life ? "flex" : "block"}
                        flexFlow="row wrap"
                        alignItems="flex-end"
                      >
                        <Title>Life</Title>
                        <Desc>
                          <glamorous.P display={home ? "block" : "none"}>
                            Call it a blog or whatever you like. These are the
                            public records of my experiences.
                          </glamorous.P>
                          <glamorous.P display={life ? "block" : "none"}>
                            Call it a blog or whatever you like. These are the
                            public records of my experiences. This could include
                            travel, bikes, food, art, or anything else I'm
                            interested in at that moment.
                          </glamorous.P>
                          <glamorous.P display={life ? "block" : "none"}>
                            For a more current look at what I'm up to you can
                            always check my
                            <BlockLink
                              href="https://www.instagram.com/iangfleming/"
                              bg={Colors.pink}
                              css={{ marginRight: 0, color: Colors.text }}
                            >
                              Instagram
                            </BlockLink>
                            .
                          </glamorous.P>
                        </Desc>
                      </glamorous.Div>
                    </Content>
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
