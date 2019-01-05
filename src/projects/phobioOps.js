import React, { Component } from "react";
import glamorous from "glamorous";
import Plx from "react-plx";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import ProjectBackBtn from "../components/ProjectBackBtn";
import {
  Hero,
  HeroTitle,
  HeroDesc,
  Content,
  SectionTitle,
  FullWidth
} from "../components/ProjectLayout";
import Colors from "../vars/Colors";
import earlyWireframes from "../images/phobio/early-wireframes.png";
import before from "../images/phobio/before.png";
import after from "../images/phobio/after.png";

class phobioOps extends Component {
  render() {
    const UpperPlx = glamorous(Plx)({
      position: "absolute",
      top: "-280px",
      right: "-50px"
    });
    const UpperShape = glamorous.svg({
      height: "500px",
      [MediaQueries.md]: {
        height: "500px"
      }
    });
    const LowerShape = glamorous.svg({});
    const easeOutElastic = t => {
      var p = 0.3;
      return (
        Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1
      );
    };
    const plxConfig = [
      {
        start: 0,
        end: 500,
        easing: easeOutElastic,
        properties: [
          {
            startValue: 0,
            endValue: 50,
            property: "translateY"
          }
        ]
      }
    ];
    return (
      <div>
        <ProjectBackBtn />
        <Hero bg={Colors.yellow}>
          <glamorous.Div maxWidth={Sizes.maxWidth}>
            <HeroTitle>Phobio Operations App</HeroTitle>
            <HeroDesc css={{maxWidth: Sizes.maxWidth}}>
              Phobio works with cell phone retailers to handle devices that are
              traded-in by customers wanting to upgrade their devices
            </HeroDesc>
          </glamorous.Div>
          <UpperPlx parallaxData={plxConfig}>
            <UpperShape
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 334"
              height="500px"
              width="auto"
            >
              <path
                fill="#91cbc8"
                d="M3 80c-13 60 21 143 44 194 18 39 46 68 94 58 99-20 174-152 204-235v-1l-1 4v-1c23-63-6-111-72-96-49 11-80 80-130 86-39 5-128-61-139-9z"
              />
            </UpperShape>
          </UpperPlx>
          <Plx
            parallaxData={plxConfig}
            style={{
              position: "absolute",
              top: "250px",
              left: "-50px"
            }}
          >
            <LowerShape
              xmlns="http://www.w3.org/2000/svg"
              height="auto"
              width="600px"
              viewBox="0 0 516 225"
            >
              <path
                fill={Colors.darkerPink}
                d="M514 129c11-54-37-82-83-74-69 11-94 44-165 12-42-18-85-72-134-67C92 4 36 38 12 70c-36 45 15 144 71 152 59 8 114-32 169-28 69 4 214 98 262-65z"
              />
            </LowerShape>
          </Plx>
        </Hero>
        <glamorous.Div width="100%" height="100%" background="white">
          <Content css={{ background: "white", paddingTop: "3rem" }}>
            <SectionTitle>Need</SectionTitle>
            <p>
              To the customer, it is presented as an easy process to trade-in their device but behind
              the scenes there is quite an infrastructure built to handle around a
              million devices a year.
            </p>
            <p>
              This project was to redesign the internal
              application that the Phobio team members in the various warehouses
              around the country use to track and managed all these devices.
            </p>
            <SectionTitle>Design</SectionTitle>
            <p>
                   The previous iteration of this tool was usable but far from ideal.
      It presented the users with every piece of information and available options 
      but had very little hierarchy. The last
              thing you should be doing in a fast paced warehouse environment is
              hunting through a dense screen of information for the one option
              you need.

            </p>
            <p>
              The problem was clear, but so was the solution. By simplifying the
              interface for the majority of users we could drastically increase
              speed and accuracy while reducing stress and improving the
              experience for them.
            </p>
            <p>
              We identified two primary user journeys: receiving shipments and
              inspecting devices. Because of their step-by-step nature, both views
              were incredibly minimal. Most of the steps only needed to present
              a single choice to the user. For example: "Is this shipment damaged?" or
              "Scan the next device".
            </p>
            <glamorous.Figure width="100%" margin="0 auto 2.5rem auto">
              <glamorous.Img
                src={earlyWireframes}
                alt=""
                width="100%"
                height="auto"
              />
              <glamorous.Figcaption
                fontSize={Sizes.sub}
                fontStyle="italic"
                float="right"
                marginTop="8px"
              >
                Some early wireframes of the user journeys
              </glamorous.Figcaption>
            </glamorous.Figure>
            <p>
              A combination of interviews, sketches, wireframes, and more
              wireframes was my <em>modus operandi</em> and after a few rounds
              it was time to...
            </p>
            <SectionTitle>Build</SectionTitle>
            <p>
              The majority of the Phobio applications use a simple MVC
              pattern with Django. However, because of the limited scope of this
              new app, I decided it would be a good time to start modernizing
              the front-end stack.
            </p>
            <p>
              The Django backend stayed intact but I built the client-side using
              React with Redux for state management and Glamorous for performant
              CSS-in-JS styles.
            </p>
            <p>
              I'd been involved in building several large React apps but this was
              the first time, outside of personal projects, I'd built one from
              scratch. It was an excellent learning experience for me and also a step
              in the right direction for Phobio's codebase.
            </p>
            <SectionTitle>Result</SectionTitle>
            <p>
              The redesigned app is in the final stages of testing now but
              responses have been great so far!
            </p>
            <p>
              Rather than fighting and hunting their way through the old app the
              users are now presented with only the information they need and are easily guided through the
              next steps they must take.
            </p>
            <FullWidth css={{marginTop: "4rem"}}>
              <glamorous.Div maxWidth={Sizes.maxWidth} margin="0 auto" padding="3rem 1rem">
                <SectionTitle css={{color: "white"}}>
                  Before
                </SectionTitle>
                <glamorous.Figure width="100%" margin="0 auto 2.5rem auto">
                  <glamorous.Img
                    src={before}
                    alt=""
                    width="100%"
                    height="auto"
                  />
                  <glamorous.Figcaption
                    fontSize={Sizes.sub}
                    fontStyle="italic"
                    float="right"
                    marginTop="8px"
                    color="white"
                  >
                    Dense information, low hierachy, and no clear path
                  </glamorous.Figcaption>
                </glamorous.Figure>
                <SectionTitle css={{color: "white"}}>
                  After
                </SectionTitle>
                <glamorous.Figure width="100%" margin="0 auto 2.5rem auto">
                  <glamorous.Img
                    src={after}
                    alt=""
                    width="100%"
                    height="auto"
                  />
                  <glamorous.Figcaption
                    fontSize={Sizes.sub}
                    fontStyle="italic"
                    float="right"
                    marginTop="8px"
                    color="white"
                  >
                    Clear path for the user, strong hierachy, simple layout
                  </glamorous.Figcaption>
                </glamorous.Figure>
              </glamorous.Div>
              <p />
            </FullWidth>
          </Content>
        </glamorous.Div>
      </div>
    );
  }
}

export default phobioOps;
