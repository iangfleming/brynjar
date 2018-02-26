import React, { Component } from "react";
import ReactDOM from "react-dom";
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
    console.log(this.state.activeLinkRect);
  };
  render() {
    const Header = glamorous.header({
      height: "3rem",
      display: "flex",
      alignItems: "center"
    });
    const HeaderLink = glamorous.a({
      margin: "0 1rem",
      cursor: "pointer"
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
          onClick={evt => this.getLinkPosition(evt)}
          ref={node => {
            this.workLinkRef = node;
          }}
        >
          Work
        </HeaderLink>
        <HeaderLink
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
