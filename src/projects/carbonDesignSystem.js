import React, { Component } from "react";
import glamorous from "glamorous";
import { Spring } from "react-spring";
import ProjectBackBtn from "../components/ProjectBackBtn";
import ProjectModal from "../components/ProjectModal";
import { SectionTitle, BlockLink, Content, FullWidth, Divider, UnstyledLink } from "../components/ProjectLayout";
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
      overflow: "hidden",
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
      marginBottom: "2rem",
    })
    return (
      <React.Fragment>
        <ProjectBackBtn />
        <Header>
          <CarbonPlx />
        </Header>
        <Content>
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
            IBM products. Carbon design system was built so that products could
            be more easily maintained and end users would have a more consistent
            experience. It has received widespread adoption from thousands of
            developers and recognition in the form of awards and references in
            books and articles.
          </p>
          <p>
            My role involved building components, researching patterns and how
            they were used in IBM products, and collecting and addressing
            feedback from users.
          </p>
          <SectionTitle>Need</SectionTitle>
          <Row>
            <p>
              IBM Design consists of several thousand designers. Which sounds
              like a lot, but at a company of over 300,000 employees we were
              still outnumbered. At that scale there should’ve been a design
              system in place to help the designers communicate their work to
              the rest of the company. However, previous attempts at building
              design systems had never really taken off. They had primarily
              focused on static design assets and left engineers with the
              difficult task of translating them into code. We saw an
              opportunity for a better solution.
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
            <glamorous.Img
              src={hacktime1}
              alt=""
              width="100%"
            />
          </glamorous.Div>
          <p>
            When building a component library of this scale, there are many
            pitfalls to avoid. With that in mind we studied libraries like
            Bootstrap, jQuery, Material Design, SalesForce Lighting, etc. Some
            of them like Bootstrap get a bad rap in the tech community but
            whatever their faults we learned a lot from them.
          </p>
          <p>
            While we gathered all this data we also held team design workshops
            where we synthesized our findings and planned how we would develop
            our design system
          </p>
          <SectionTitle>Result</SectionTitle>
          <p>
            The system we built includes a component library built using vanilla
            javascript and one for the React.js environment, design assets in a
            Sketch library, and a website with detailed documentation and usage
            guidelines. </p>
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
          <FullWidth bg="white" css={{textAlign: "center"}}>
            <glamorous.Div maxWidth="960px" padding="0 2rem" margin="0 auto">
              <SectionTitle>Recognition</SectionTitle>
              <Divider />
              <glamorous.Div display="flex" justifyContent="space-around" flexFlow="row wrap" marginTop="3rem">
                <UnstyledLink target="_blank" href="http://www.howdesign.com/in-house-design-awards-best-of-show-carbon-design-system/">
                  <figure>
                    <RecBadge src={howLogo} />
                    <glamorous.Figcaption maxWidth="200px">Winner of the In-House Design Award 2017</glamorous.Figcaption>
                  </figure>
                </UnstyledLink>
                <UnstyledLink target="_blank" href="https://www.smashingmagazine.com/printed-books/design-systems/">
                  <figure>
                    <RecBadge src={smashingLogo} />
                    <glamorous.Figcaption maxWidth="200px">Featured in the book “Design Systems” by Alla Kholmatova</glamorous.Figcaption>
                  </figure>
                </UnstyledLink>
              </glamorous.Div>
            </glamorous.Div>
          </FullWidth>
          <FullWidth bg="white" css={{textAlign: "center", marginTop: "4rem"}}>
            <glamorous.Div maxWidth="960px" padding="0 2rem" margin="0 auto">
              <SectionTitle>Usage</SectionTitle>
              <Divider />
              <glamorous.Div display="flex" justifyContent="space-around" alignItems="center"flexFlow="row wrap" marginTop="3rem">
                <glamorous.P maxWidth="200px">Weekly number of installs of the
                <BlockLink bg={Colors.text} href="https://www.npmjs.com/package/carbon-components">carbon-components</BlockLink>
                package on npm</glamorous.P>
                <glamorous.P fontSize="144px" fontFamily="Oswald" margin="0">31,529</glamorous.P>
              </glamorous.Div>
            </glamorous.Div>
          </FullWidth>
          <p>
            members of our team have spoken about Carbon at
            conferences all over the globe.
          Currently the Carbon Components package is averaging{" "}
            <strong>31,529 </strong>
            downloads a *week* on NPM, it's frequently reference in the new
            Smashing Mag book “Design Systems", we won the
            <BlockLink
              bg={Colors.secondary}
              href="http://www.howdesign.com/in-house-design-awards-best-of-show-carbon-design-system/"
            >
              HOW In-House Design Award
            </BlockLink>
            in 2017 and p>
          </p>
          <p>
            Successfully launching and maintaining a design system is no small
            task, especially in such a large organization, but I learned so much
            and I'm proud of what we built.
          </p>
          <p>
            See more at
            <BlockLink
              bg={Colors.carbonBlue}
              href="http://www.carbondesignsystem.com/"
            >orange
              Carbon Design System
            </BlockLink>
          </p>
        </Content>
      </React.Fragment>
    );
  }
}

export default carbonDesignSystem;
