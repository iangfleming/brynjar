import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

const ProjectBackBtn = ({ match, white, absolute }) => {
  const StyledLink = glamorous(Link)({
    color: white ? "white !important" : "inherit",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Oswald",
    top: "1rem",
    right: "1.5rem",
    position: absolute ? "absolute" : "fixed",
    transition: "transform 60ms",
    ":hover": {
      transform: "translateX(-8px)"
    },
    ":visited": {
      color: "initial"
    },
    "> svg": {
      fill: white ? "white" : "black",
      marginRight: "3px",
      marginTop: "1px"
    }
  });
  // slightly hacky to fix in future
  const category = match.url.includes("work") ? "/work" : "/life";
  return (
    <StyledLink to={category}>
      <svg width="16" height="14" viewBox="0 0 16 14">
        <path d="M4.044 8.003l4.09 3.905-1.374 1.453-6.763-6.356L6.759.639 8.135 2.09 4.043 6.003h11.954v2H4.044z" />
      </svg>
      Back
    </StyledLink>
  );
};
export default withRouter(ProjectBackBtn);
