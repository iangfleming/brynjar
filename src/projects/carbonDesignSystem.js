import React, { Component } from "react";
import glamorous from "glamorous";
import { Spring } from "react-spring";
import ProjectBackBtn from "../components/ProjectBackBtn";
import ProjectModal from "../components/ProjectModal";
import {
  SectionTitle,
  BlockLink,
  Content,
  FullWidth,
  Divider,
  UnstyledLink
} from "../components/ProjectLayout";
import Code from "../components/Code";
import CarbonPlx from "../components/CarbonPlx";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";
import carbonKit from "../images/carbon/carbon-kit.png";
import carbonSite from "../images/carbon/carbon-site.png";
import carbonPattern from "../images/carbon/carbon-pattern.svg";
import smashingLogo from "../images/carbon/smashing-logo.svg";
import howLogo from "../images/carbon/how-logo.png";
import blob from "../images/blob.svg";
import { glMatrix } from "gl-matrix";

class carbonDesignSystem extends Component {
  render() {
    const Header = glamorous.header({
      position: "relative",
      height: "800px",
      // width: "100%",
      // background: `url(${carbonPattern})`,
      background: Colors.carbonBlue,
      textAlign: "center",
      overflow: "hidden"
    });
    const Row = glamorous.div({
      display: "flex",
      alignItems: "center",
      marginBottom: "1rem"
    });
    const Quote = glamorous.div(props => {
      return {
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "white",
        width: "15rem",
        flexShrink: 0,
        padding: "2.5rem",
        marginLeft: "-4rem",
        marginRight: "3rem"
      };
    });
    const RecBadge = glamorous.img({
      height: "4rem",
      width: "auto",
      marginBottom: "2rem"
    });
    return (
      <React.Fragment>
        <ProjectBackBtn />
        <Header>
          <CarbonPlx />
        </Header>
        <Content css={{marginBottom: "5rem"}}>
          <glamorous.H4
            textAlign="center"
            fontSize={Sizes.super}
            fontStyle="italic"
            marginTop="5rem"
            marginBottom="5rem"
          >
            A design ecosystem for IBM products
          </glamorous.H4>
          <p>
            I was a founding member of the team that built and maintained a
            system of patterns and components for designers and developers of
            IBM products.
            <BlockLink
              bg={Colors.carbonBlue}
              href="http://www.carbondesignsystem.com/"
            >
              Carbon Design System
            </BlockLink>
            was originally built so that IBM products could be maintained more
            easily maintained and the end users would have a more consistent
            experience. Additionally, it has received widespread adoption from
            thousands of developers and recognition in the form of awards and
            references in books and articles.
          </p>
          <p>
            My role with Carbon included building components, researching
            patterns and how they were used in current IBM products, and
            collecting and addressing feedback from users.
          </p>
          <SectionTitle>Need</SectionTitle>
          <Row>
            <p>
              IBM Design consists of several thousand designers. Which sounds
              like a lot, but at a company of over 300,000 employees we were
              still outnumbered. At that scale, there should’ve already been a
              design system in place to help the designers communicate their
              work to the rest of the company. However, previous attempts had
              never really taken off. They had primarily focused on static
              design assets and left engineers with the difficult task of
              translating them into code. We saw an opportunity for a better
              solution that bridged the gap between designers and engineers.
            </p>
          </Row>
          <SectionTitle>Process</SectionTitle>
          <p>
            We began our research process by interviewing product teams who
            would be using our design system. From those interviews we learned
            about their experience with the status quo, what worked, and what
            didn't.
          </p>
          <glamorous.Div width="100%" textAlign="center">
            <glamorous.Img src={hacktime1} alt="" width="100%" />
          </glamorous.Div>
          <p>
            When building a component library of this scale, there are many
            pitfalls to avoid. With that in mind we studied libraries like
            Bootstrap, jQuery, Material Design, SalesForce Lighting, etc. Some
            of them like Bootstrap get a bad rap in the tech community but
            whatever their faults we learned a lot from them.
          </p>
          <p>
            While we gathered all this data we were also holding team design
            workshops where we synthesized our findings and planned how we would
            develop our design system.
          </p>
          <SectionTitle>Result</SectionTitle>
          <p>
            Ultimately we were able to build a design system for all of IBM that
            successfully addresses many of the pain points we discovered during
            our research phase. Carbon includes a component library built using
            vanilla javascript and one for the React.js environment, design
            assets in a Sketch library, and a website with detailed
            documentation and usage guidelines.
          </p>
          <Row>
            {/* <Quote image={blob}>
              <p>
                "In the Carbon design system, names and folder structure are
                consistent across the three facets of the system.
              </p>
              <p>Design Systems by Alla Kholmatova</p>
            </Quote> */}
            <div>
              <p>
                Consistency between parts of the system is one of it's most
                important features. It allows collaboration between designers,
                developers, and others to be as smooth as possible.
              </p>
              <p>
                Now, when a new team member starts at IBM they can get started
                extremely quickly with Carbon by following guides on the site,
                downloading a Sketch template, or simply running{" "}
                <Code type="i">yarn add carbon-components</Code>
              </p>
            </div>
          </Row>
          <FullWidth bg={Colors.carbonBlue}>
            <glamorous.Div maxWidth="700px" margin="2rem auto" padding="2rem 0">
              <glamorous.Img
                src={carbonSite}
                alt=""
                width="100%"
                height="auto"
                display="block"
                marginBottom="2rem"
              />
              <glamorous.Img
                src={carbonKit}
                alt=""
                width="100%"
                height="auto"
                display="block"
              />
            </glamorous.Div>
          </FullWidth>
          <FullWidth bg="white" css={{ textAlign: "center" }}>
            <glamorous.Div maxWidth="960px" padding="0 2rem" margin="0 auto">
              <SectionTitle>Recognition</SectionTitle>
              <Divider />
              <glamorous.Div
                display="flex"
                justifyContent="space-around"
                flexFlow="row wrap"
                marginTop="3rem"
              >
                <UnstyledLink
                  target="_blank"
                  href="http://www.howdesign.com/in-house-design-awards-best-of-show-carbon-design-system/"
                >
                  <figure>
                    <RecBadge src={howLogo} />
                    <glamorous.Figcaption maxWidth="200px">
                      Winner of the In-House Design Award 2017
                    </glamorous.Figcaption>
                  </figure>
                </UnstyledLink>
                <UnstyledLink
                  target="_blank"
                  href="https://www.smashingmagazine.com/printed-books/design-systems/"
                >
                  <figure>
                    <RecBadge src={smashingLogo} />
                    <glamorous.Figcaption maxWidth="200px">
                      Featured in the book “Design Systems” by Alla Kholmatova
                    </glamorous.Figcaption>
                  </figure>
                </UnstyledLink>
              </glamorous.Div>
            </glamorous.Div>
          </FullWidth>
          <FullWidth
            bg="white"
            css={{ textAlign: "center", marginTop: "4rem" }}
          >
            <glamorous.Div maxWidth="960px" padding="0 2rem" margin="0 auto">
              <SectionTitle>Usage</SectionTitle>
              <Divider />
              <glamorous.Div
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                flexFlow="row wrap"
                marginTop="3rem"
              >
                <glamorous.P maxWidth="200px">
                  Weekly number of installs of the
                  <BlockLink
                    bg={Colors.text}
                    href="https://www.npmjs.com/package/carbon-components"
                  >
                    carbon-components
                  </BlockLink>
                  package on npm
                </glamorous.P>
                <glamorous.P fontSize="144px" fontFamily="Oswald" margin="0">
                  31,529
                </glamorous.P>
              </glamorous.Div>
            </glamorous.Div>
          </FullWidth>
          <SectionTitle css={{ marginTop: "6rem" }}>Reflection</SectionTitle>
          <p>
            Successfully launching and maintaining a design system is no small
            task, especially in such a large organization.
          </p>
          <p>
            I came to the Carbon team somewhat disillusioned from working on my
            previous team (see
            <BlockLink bg={Colors.purple2} href="">
              MobileFirst
            </BlockLink>
            ) so it was incredibly refreshing to see a team with clear vision,
            working and learning from their mistakes.
          </p>
          <p>
            Our team was small and tight knit so we all did a bit of everything.
            On any given day I could be fixing bugs in production, designing and
            prototyping a new feature, or interviewing users. That's not to say
            we didn't have our own specilizations. I focused on typograhy,
            motion design, and performance in particular.
          </p>
          <p>I learned so much and I'm proud of what I built.</p>
          <p>
            See the finished product at
            <BlockLink
              bg={Colors.carbonBlue}
              href="http://www.carbondesignsystem.com/"
            >
              Carbon Design System
            </BlockLink>
          </p>
        </Content>
      </React.Fragment>
    );
  }
}

export default carbonDesignSystem;
