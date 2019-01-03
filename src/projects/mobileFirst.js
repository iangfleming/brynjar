import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import ProjectBackBtn from "../components/ProjectBackBtn";
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

class mobileFirst extends Component {
  render() {
    return (
      <div>
        <ProjectBackBtn white/>
        <Hero bg={Colors.purple2}>
          <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto">
            <HeroTitle white>IBM MobileFirst</HeroTitle>
            <HeroDesc white>
              Sometimes preventing the wrong product from being made is just as
              imporant as building a product.
            </HeroDesc>
          </glamorous.Div>
        </Hero>
        <Content>
          <SectionTitle>
            The story of a failed project
          </SectionTitle>
          <p>
            Sometimes preventing the wrong product from being made is just as
            important as building a product. Although it's weird to have nothing
            to show for several months of work!
          </p>
          <p>
            My first team after joining IBM Design was the MobileFirst product
            group. At the time the product managers were debating building a new
            analytics tool for mobile developers. We already had an analytics tool, but it was basic with limited insights and capabilities.
          </p>
          <p>
            A teammate and I researched the mobile
            analytics space and learned what our users would need. We interviewed developers, read everything we could about the
            domain, and dug deep into all our competitor's products.
          </p>
          <p>
                                                                                                                                                                                                                                                                                                                                       
          </p>
   
          <FullWidth bg={Colors.purple3} css={{padding: "2rem 0", textAlign: "center"}}>
            <Content>
              <glamorous.P fontSize={Sizes.head} fontFamily="Oswald">
                We realized that the needs of our users were already being met by
                other IBM products!
              </glamorous.P>
            </Content>
          </FullWidth>
          <p>
            As crazy as it may seem, in a company as big as IBM there are so
            many products that it's really easy for them to overlap.
          </p>
          <SectionTitle>Result</SectionTitle>
          <p>
            After this realization, we designed a plan for our existing analytics
            tool to work with, instead of against, the other IBM analytics
            products.
          </p>
          <p>
            Although we didn't end up building
            anything, I would argue that the research and synthesis we did
            was far more valuable than just building another app. We saved the
            company time and money and most importantly helped product teams,
            that weren't talking to each other, connect.
          </p>
        </Content>
      </div>
    );
  }
}

export default mobileFirst;
