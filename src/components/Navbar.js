import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

class Navbar extends Component {
  state = {
    activeLinkRect: {}
    // transform: ""
  };
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidMount() {
    const workLinkNode = ReactDOM.findDOMNode(this.workLinkRef);
    const workLinkRect = workLinkNode.getBoundingClientRect();
    this.setState({ activeLinkRect: workLinkRect });
  }
  getLinkPosition = evt => {
    const rect = evt.target.getBoundingClientRect();
    this.setState({ activeLinkRect: rect });
  };
  // handleMouseOver = evt => {
  //   const evtRect = evt.target.getBoundingClientRect();
  //   if (this.state.activeLinkRect.x != evtRect.x) {
  //     this.setState({ transform: `translateX(${evtRect.x}px)` });
  //   }
  // };
  render() {
    const Header = glamorous.header({
      height: "6.5rem",
      display: "flex",
      alignItems: "center",
      marginBottom: "-2rem"
    });
    // should actually be a navlink <3
    const HeaderLink = glamorous(Link)({
      margin: "0 1rem",
      cursor: "pointer",
      textDecoration: "none"
    });
    const HeaderLinkUnderline = glamorous.div({
      background: "black",
      position: "absolute",
      height: "2px",
      transition: "all 175ms cubic-bezier(0.5, 0, 0.1, 1)",
      width: this.state.activeLinkRect.width,
      left: this.state.activeLinkRect.left,
      top: this.state.activeLinkRect.top + this.state.activeLinkRect.height
    });
    return (
      <Header>
        <HeaderLink css={{ textTransform: "uppercase" }} to="/">
          <glamorous.Svg height="5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.76 121.51">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path
                  d="M2.76 50s47 95 154 66 91-89 0-89-173-74-154 23z"
                  fill="#f1da79"
                />
                <path
                  d="M43.41 111.34V24a1.21 1.21 0 0 1 1.29-1.36h4.91c.86 0 1.29.45 1.29 1.36v87.36a1.14 1.14 0 0 1-1.29 1.3H44.7a1.14 1.14 0 0 1-1.29-1.32zm89.59-.79l-31.22-87.36a1.66 1.66 0 0 0-1.61-1.36h-4.79a1.66 1.66 0 0 0-1.55 1.36L62.3 110.55c-.26.86.06 1.29 1 1.29h5.17a1.76 1.76 0 0 0 1.68-1.3L74 99h.06l23.46-65h.38l25 70.64 2.23 5.87a1.55 1.55 0 0 0 1.75 1.3h5.17q1.33.03.95-1.26zm9.71.79V24a1.21 1.21 0 0 1 1.29-1.38h4.91a2.29 2.29 0 0 1 2.26 1.38L196 98h.39V24a1.21 1.21 0 0 1 1.28-1.36h4.87c.85 0 1.3.45 1.34 1.36v87.36c0 .87-.45 1.3-1.35 1.3h-5.17a2.32 2.32 0 0 1-2.19-1.3l-44.45-74.13h-.52v74.11a1.14 1.14 0 0 1-1.29 1.3H144a1.14 1.14 0 0 1-1.29-1.3z"
                  fill="#271924"
                />
                <path
                  d="M240.68 71.41c0 6.26-7.49 9.34-13.75 9.34s-13.25-5.58-13.25-11.84 7-10.83 13.25-10.83 13.75 7.07 13.75 13.33z"
                  fill="#01b3bb"
                />
                <path
                  d="M227.26 54.25v32m24-16h-32"
                  fill="none"
                  stroke="#271924"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
          </glamorous.Svg>
        </HeaderLink>
        <HeaderLink
          to="/work"
          onClick={evt => this.getLinkPosition(evt)}
          // onMouseOver={evt => this.handleMouseOver(evt)}
          ref={node => {
            this.workLinkRef = node;
          }}
        >
          Work
        </HeaderLink>
        <HeaderLink
          to="/life"
          onClick={evt => this.getLinkPosition(evt)}
          // onMouseOver={evt => this.handleMouseOver(evt)}
          ref={node => {
            this.lifeLinkRef = node;
          }}
        >
          Life
        </HeaderLink>
        <HeaderLinkUnderline />
      </Header>
    );
  }
}

export default Navbar;
