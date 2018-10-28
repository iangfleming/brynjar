import React, { Component } from "react";
import glamorous from "glamorous";
import ProjectBackBtn from "../components/ProjectBackBtn";
import Code from "../components/Code";
import Sizes from "../vars/Sizes";
import {
  Hero,
  HeroTitle,
  HeroDesc,
  Content,
  SectionTitle,
  BlockLink,
  FullWidth
} from "../components/ProjectLayout";
import Colors from "../vars/Colors";

class Acorns extends Component {
  render() {
    return (
      <div>
        <ProjectBackBtn />
        <Hero bg={Colors.paleGreen}>
          <glamorous.Div maxWidth={Sizes.maxWidth}>
            <HeroTitle>Acorns</HeroTitle>
            <HeroDesc>
              Personal library of helpers. Light and composable CSS utility
              classes for building quickly
            </HeroDesc>
          </glamorous.Div>
        </Hero>
        <Content>
          <SectionTitle>Origin</SectionTitle>
          <p>
            If you've ever spent any amount of time working with an existing CSS
            codebase you'll know the pain of adding an
            <Code type="i">!important</Code>
            because the specificity of the style you're trying to change is so
            high your poor CSS has no chance at overruling it! This is where the
            idea of atomic CSS originates.
          </p>
          <p>
            I found libraries such as{" "}
            <BlockLink bg={Colors.teal} href="http://tachyons.io/">
              Tachyons
            </BlockLink>{" "}
            and{" "}
            <BlockLink bg={Colors.red} href="http://jxnblk.com/gravitons/">
              Gravitons
            </BlockLink>{" "}
            inspirational and very helpful. However, the best way to understand
            a tool is to build it yourself. So I decided to start a package of
            my personal utilties that I could refactor, improve, and expand as
            need be.
          </p>
          <p>
            Now if I'm on a friend's computer and want to build or mock
            something up quickly all I need to do is a quick{" "}
            <Code type="i">yarn add acorns</Code> and I'm ready to go with tools
            I'm familiar with.
          </p>
          <FullWidth bg={Colors.paleGreen}>
            <Content css={{padding: "3rem 0"}}>
              <SectionTitle>Why Acorns?</SectionTitle>
              <glamorous.P>
                The name comes from the idea that such a small and
                inconsequential thing as an acorn is the beginning of a mighty
                oak tree.
              </glamorous.P>
            </Content>
          </FullWidth>
          <SectionTitle>Usage</SectionTitle>
        </Content>
      </div>
    );
  }
}

export default Acorns;
