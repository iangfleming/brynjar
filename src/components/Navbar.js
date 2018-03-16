import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import glamorous from "glamorous";

class Navbar extends Component {
  state = {
    activeLinkRect: {}
  };
  componentDidMount() {
    const workLinkNode = ReactDOM.findDOMNode(this.workLinkRef);
    const workLinkRect = workLinkNode.getBoundingClientRect();
    this.setState({ activeLinkRect: workLinkRect });
  }
  getLinkPosition = evt => {
    const rect = evt.target.getBoundingClientRect();
    this.setState({ activeLinkRect: rect });
  };
  render() {
    const Header = glamorous.header({
      height: "3rem",
      display: "flex",
      alignItems: "center"
    });
    // should actually be a navlink <3
    const HeaderLink = glamorous(Link)({
      margin: "0 1rem",
      cursor: "pointer",
      textDecoration: "none"
    });
    const HeaderLinkUnderline = glamorous.div({
      background: "black",
      position: "fixed",
      height: "2px",
      transition: "all 175ms cubic-bezier(0.5, 0, 0.1, 1)",
      width: this.state.activeLinkRect.width,
      left: this.state.activeLinkRect.left,
      top: this.state.activeLinkRect.top + this.state.activeLinkRect.height
    });
    return (
      <Header>
        <HeaderLink
          css={{textTransform: "uppercase"}}
          to="/"
        >
          Ian
        </HeaderLink>
        <HeaderLink
          to="/work"
          onClick={evt => this.getLinkPosition(evt)}
          ref={node => {
            this.workLinkRef = node;
          }}
        >
          Work
        </HeaderLink>
        <HeaderLink
          to="/life"
          onClick={evt => this.getLinkPosition(evt)}
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
