import React, { Component } from "react";
import glamorous from "glamorous";
import { Spring } from "react-spring";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";
import {BlockLink} from "../components/ProjectLayout";
import Code from "../components/Code";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";
import hacktime1 from "../images/carbon/hacktime-1.jpg";
import hacktime2 from "../images/carbon/hacktime-2.jpg";
import hacktime3 from "../images/carbon/hacktime-3.jpg";
import carbonKit from "../images/carbon/carbon-kit.png";
import carbonSite from "../images/carbon/carbon-site.png";
import blob from "../images/blob.svg";

class carbonDesignSystem extends Component {
  render() {
    const Downloads = props => {
      return <glamorous.P color="white">{props.count}</glamorous.P>;
    };
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
    const SectionTitle = glamorous.h4({
      fontSize: Sizes.subhead
    });
    const FullWidth = glamorous.div({
      width: "100vw",
      position: "relative",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      background: Colors.text
    });
    return (
      <ProjectModal>
        <ProjectCloseBtn />
        <glamorous.Div maxWidth="567px" margin="0 auto">
          <glamorous.H1 fontSize={Sizes.head} marginBottom=".5rem">
            <glamorous.Span color={Colors.red} marginRight="10px">
              Carbon
            </glamorous.Span>
            Design System
          </glamorous.H1>
          <glamorous.H4
            fontSize={Sizes.sub}
            marginTop=".5rem"
            marginBottom="2rem"
          >
            A design ecosystem for IBM products
          </glamorous.H4>
          <p>
            I was part of the team that built and maintained a system of
            patterns and components for designers and developers of IBM
            products. Carbon design system was built so that products could be
            more easily maintained and end users would have a more consistent
            experience. It has received widespread adoption from thousands of
            developers and recognition in the form of awards and references in
            books and articles.
          </p>
          <FullWidth>
            <glamorous.Div maxWidth="700px" margin="0 auto">
              <Spring
                from={{ count: 0 }}
                to={{ count: 31529 }}
                config={{
                  tension: 0,
                  friction: 2,
                  restSpeedThreshold: 1,
                  restDisplacementThreshold: 1,
                  overshootClamping: true
                  
                }}
              >
                {props => <Downloads count={props.count} />}
              </Spring>
            </glamorous.Div>
          </FullWidth>
          <p>
            My role involved building components, researching patterns and how
            they were used in IBM products, and collecting and addressing
            feedback from users.
          </p>
          <FullWidth>
            <glamorous.Div maxWidth="700px" margin="0 auto">
              <glamorous.Img
                src={hacktime2}
                alt=""
                width="auto"
                height="10rem"
              />
              <glamorous.Img
                src={hacktime3}
                alt=""
                width="auto"
                height="10rem"
              />
            </glamorous.Div>
          </FullWidth>
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
            <Quote image={blob}>
              <p>quote</p>
              <p>by so and so</p>
            </Quote>
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
              maxWidth="500px"
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
            guidelines.
          </p>
          <Row>
            <Quote image={blob}>
              <p>
                "In the Carbon design system, names and folder structure are
                consistent across the three facets of the system.
              </p>
              <p>Design Systems by Alla Kholmatova</p>
            </Quote>
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
          <glamorous.Div width="100%">
            <glamorous.Img src={carbonKit} alt="" width="auto" height="10rem" />
            <glamorous.Img
              src={carbonSite}
              alt=""
              width="auto"
              height="10rem"
            />
          </glamorous.Div>
          <p>
            Currently the Carbon Components package is averaging 31,529
            downloads a *week* on NPM, it's frequently reference in the new
            Smashing Mag book “Design Systems", we won the
            <BlockLink bg={Colors.secondary} href="http://www.howdesign.com/in-house-design-awards-best-of-show-carbon-design-system/">
              HOW In-House Design Award
            </BlockLink>
            in 2017 and members of our team have spoken about Carbon at
            conferences all over the globe.
          </p>
          <p>
            Successfully launching and maintaining a design system is no small
            task, especially in such a large organization, but I learned so much
            and I'm proud of what we built.
          </p>
          <SectionTitle>TLDR;</SectionTitle>
          <p>stuff</p>
        </glamorous.Div>
      </ProjectModal>
    );
  }
}

export default carbonDesignSystem;
