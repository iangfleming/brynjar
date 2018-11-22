import React, { Component } from "react";
import { Spring, Keyframes, animated, interpolate, config } from "react-spring";
import glamorous from "glamorous";
import MediaQueries from "../vars/MediaQueries";
const LogoOuter = glamorous.svg({
  float: "right",
  width: "328px",
  height: "187px",
  position: "fixed",
  left: "50%",
  top: "10%",
  marginLeft: "-111px",
  overflow: "visible",
  transform: "scale(.6)",
  transformOrigin: "111px center",
  [MediaQueries.md]: {
    top: "20%",
    transform: "scale(1)"
  }
});
const logoSpringConfig = {
  tension: 35,
  friction: 3
};

const Logo = props => {
  return (
    <LogoOuter css={{ opacity: props.panel !== "home" ? 0 : 1 }}>
      <g fill="#271924" fill-rule="evenodd">
        <Spring
          from={props.direction === "left" ? { lY: 50, rY: 0 } : { lY: 0, rY: 50 }}
          to={props.direction === "left" ? { lY: 50, rY: 0 } : { lY: 0, rY: 50 }}
          config={logoSpringConfig}
          native
        >
          {({ lY, rY }) => {
            return (
              <React.Fragment>
                <animated.path
                  style={{
                    transform: lY.interpolate(lY => `translateY(-${lY}px)`)
                  }}
                  d="M0 184V4c0-1 1-2 3-2h10c2 0 2 1 2 2v180c0 2 0 3-2 3H3c-2 0-3-1-3-3M112 0h-5c-2 0-3 1-3 3L39 182c-1 2 0 3 2 3h10c2 0 3-1 4-3l8-23 48-134h1"
                />
                <animated.g
                  style={{
                    transform: rY.interpolate(rY => `translateY(-${rY}px)`)
                  }}
                >
                  <path d="M110 25h1l51 146 5 12c0 1 1 2 3 2h11c2 0 2-1 2-2L118 3c0-2-1-3-3-3h-5M203 5c0-2 0-3 2-3h10c2 0 4 1 5 3l92 152h1V5c0-2 1-3 3-3h10c1 0 2 1 2 3v179c0 2-1 3-2 3h-11c-2 0-4-1-5-3L219 32h-1v152c0 2-1 3-3 3h-10c-2 0-2-1-2-3V5z" />
                </animated.g>
              </React.Fragment>
            );
          }}
        </Spring>
      </g>
    </LogoOuter>
  );
};
export default Logo;