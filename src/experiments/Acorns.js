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
  FullWidth,
  Row
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
        <Content css={{ marginBottom: "3rem" }}>
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
            <Content css={{ padding: "3rem 0" }}>
              <Row>
                <glamorous.Svg flexShrink="0" marginRight="1rem" width="62" height="76" viewBox="0 0 62 76">
                  <g fill="none" fill-rule="nonzero">
                    <path
                      fill="#A58037"
                      d="M57.8 38.1H3S1.5 72.2 26 72.2l2.9 2.9c.8.8 2.2.8 3 0l2.9-2.9c24.6 0 23-34.1 23-34.1z"
                    />
                    <path
                      fill="#8C6611"
                      d="M61.5 34.3C60.6 26.4 55.8 11 31 11S1.3 26.4.5 34.3c-.3 2.4 1.6 4.5 4 4.5h53c2.4.1 4.3-2 4-4.5z"
                    />
                    <path
                      fill="#8C6611"
                      d="M27.3 11.7h7.8s-2.8-5.7 4-6.4v-5c-.1 0-11.8-1.4-11.8 11.4z"
                    />
                    <path
                      fill="#8C6611"
                      d="M26 72.2l2.9 2.9c.8.8 2.2.8 3 0l2.9-2.9c8 0 13.3-3.7 16.7-8.6L20 38.9l-17-.8S1.5 72.2 26 72.2z"
                      opacity=".6"
                    />
                    <path
                      fill="#A58037"
                      d="M20.2 38.9L3 25.4c-1.6 3.3-2.2 6.5-2.5 9-.3 2.4 1.6 4.5 4 4.5h15.7z"
                    />
                  </g>
                </glamorous.Svg>
                <glamorous.Div>
                  <SectionTitle>Why Acorns?</SectionTitle>
                  <glamorous.P>
                    The name comes from the idea that such a small and
                    inconsequential thing as an acorn is the beginning of a mighty
                    oak tree.
                  </glamorous.P>
                </glamorous.Div>
              </Row>
            </Content>
          </FullWidth>
          <SectionTitle>Usage</SectionTitle>
          <iframe
            height="265"
            scrolling="no"
            title="Acorns Demo"
            src="//codepen.io/iangfleming/embed/preview/vQYRoK/?height=265&theme-id=light&default-tab=html,result"
            frameborder="no"
            allowtransparency="true"
            allowfullscreen="true"
            style={{ width: "100%" }}
          >
            See the Pen{" "}
            <a href="https://codepen.io/iangfleming/pen/vQYRoK/">Acorns Demo</a>{" "}
            by Ian Fleming (
            <a href="https://codepen.io/iangfleming">@iangfleming</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </iframe>
          <p>See the full project on
           <BlockLink bg={Colors.orange} href="https://github.com/iangfleming/acorns">
              Github
           </BlockLink>
           </p>
        </Content>
      </div>
    );
  }
}

export default Acorns;
