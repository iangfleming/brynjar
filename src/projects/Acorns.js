import React, { Component } from "react";
import glamorous from "glamorous";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";
import Code from "../components/Code";
import Sizes from "../vars/Sizes";

class Acorns extends Component {
  render() {
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <glamorous.H1 fontSize={Sizes.head}>Acorns</glamorous.H1>
        <glamorous.H2 fontSize={Sizes.sub}>
          Light and composable CSS utility classes for building quickly
        </glamorous.H2>
        <glamorous.H3 fontSize={Sizes.subhead}>Origin</glamorous.H3>
        <p>
          If you've ever spent any amount of time working with an existing CSS
          codebase you'll know the pain of adding an
          <Code type="i">!important</Code>
          because the specificity of the style you're trying to change is so
          high your poor CSS has no chance at overruling it! This is where the
          idea of atomic CSS originates.
        </p>
        <p>
          I found libraries such as <a href="http://tachyons.io/">Tachyons</a>{" "}
          and <a href="http://jxnblk.com/gravitons/">Gravitons</a> inspirational
          and very helpful. However, the best way to understand a tool is to
          build it yourself. So I decided to start a package of my personal
          utilties that I could refactor, improve, and expand as need be.
        </p>
        <p>
          Now if I'm on a friend's computer and want to build or mock something
          up quickly all I need to do is a quick{" "}
          <Code type="i">yarn add acorns</Code> and I'm ready to go with tools
          I'm familiar with.
        </p>
        <glamorous.P fontSize={Sizes.sub} textTransform="uppercase">
          * Note: the name Acorns comes from the idea that such a small
          inconsequential thing as an acorn can be the beginning of a mighty oak
          tree
        </glamorous.P>
        <glamorous.H3 fontSize={Sizes.subhead}>Usage</glamorous.H3>
      </ProjectModal>
    );
  }
}

export default Acorns;
