import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

const ProjectCloseBtn = ({match}) => {
  const StyledLink = glamorous(Link)({
    height: "1.5rem",
    width: "1.5rem",
    top: "1rem",
    right: "1rem",
    position: "fixed",
    transition: "transform 60ms",
    ":hover": {
      transform: "rotate(-15deg)"
    },
    "> svg": {
      fill: "blue"
    }
  })
  const catagory = match.url.includes("work") ? "/work" : "/life";
  return (
    <StyledLink to={catagory}>
      <svg viewBox="0 0 45 45">
        <path d="M22.5,14.6060018 L37.1060018,9.76996262e-15 L45,7.89399825 L30.3939982,22.5 L45,37.1060018 L37.1060018,45 L22.5,30.3939982 L7.89399825,45 L-1.42108547e-14,37.1060018 L14.6060018,22.5 L-1.33226763e-14,7.89399825 L7.89399825,3.55271368e-15 L22.5,14.6060018 Z"></path>
      </svg>
    </StyledLink>
  )
}
export default withRouter(ProjectCloseBtn);