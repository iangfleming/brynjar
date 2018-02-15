import React, { Component } from 'react';
import glamorous from "glamorous";

class Navbar extends Component {
  render() {
    const Header = glamorous.header({
      height: "3rem",
      display: "flex",
      alignItems: "center"
    })
    const HeaderLink = glamorous.a({
      margin: "0 1rem",
      cursor: "pointer"
    })
    const HeaderLinkUnderline = glamorous.div({
      height: "2px",
      width: "25px",
      background: "black",
      position: "fixed"
    })
    return (
      <Header>
        <HeaderLink>Work</HeaderLink>
        <HeaderLink>Life</HeaderLink>
        <HeaderLinkUnderline />
      </Header>
    )
  }
}

export default Navbar;