import React, { Component } from "react";
import glamorous from "glamorous";
import Plx from "react-plx";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import ProjectBackBtn from "../components/ProjectBackBtn";
import { Hero, HeroTitle, HeroDesc, Content, SectionTitle, FullWidth } from "../components/ProjectLayout";
import Colors from "../vars/Colors";

class phobioOps extends Component {
  render() {
    const UpperPlx = glamorous(Plx)({
      position: "absolute",
      top: "-280px",
      right: "-50px"
    })
    const UpperShape = glamorous.svg({
      height: "500px",
      [MediaQueries.md]: {
        height: "500px",
      }
    });
    const LowerShape = glamorous.svg({
    });
    const easeOutElastic = (t) => {
      var p = 0.3;
      return Math.pow(2,-10*t) * Math.sin((t-p/4)*(2*Math.PI)/p) + 1;
  }
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
            <HeroDesc>
              Phobio works with cell phone retailers to handle devices that are
              traded-in by customers upgrading their devices
            </HeroDesc>
          </glamorous.Div>
          <UpperPlx
            parallaxData={plxConfig}
          >
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
              left: "-50px",
            }}
          >
            <LowerShape
              xmlns="http://www.w3.org/2000/svg"
              height="auto"
              width="600px"
              viewBox="0 0 516 225"
            >
              <path
                fill="#f87d82"
                d="M514 129c11-54-37-82-83-74-69 11-94 44-165 12-42-18-85-72-134-67C92 4 36 38 12 70c-36 45 15 144 71 152 59 8 114-32 169-28 69 4 214 98 262-65z"
              />
            </LowerShape>
          </Plx>
        </Hero>
        <glamorous.Div width="100%" height="100%" background="white">
          <Content css={{background: "white", paddingTop: "3rem"}}>
            <SectionTitle>Need</SectionTitle>
            <p>
              Phobio works with cell phone retailers to handle devices that are
              traded-in by customers upgrading their devices. To the customer it
              is presented a simple easy process but behind the scenes there is
              quite an infrastructure to handle around a million devices a year.
            </p>
            <p>
              This project in particular was to redesign the internal
              application that Phobio team members in the various warehouses
              around the country use to track and managed all these devices.
            </p>
            <SectionTitle>Process</SectionTitle>
            <p>
              The previous interation of the these tools usuable but far from
              ideal. It presented the users with every piece of information and
              every available option with very little hierachy. And the last
              thing you want to be doing in a fast pace warehouse enviroment is
              hunting through a dense screen of information for the one option
              you need.
            </p>
            <p>
              The problem was clear and so was the solution. By simplifying the
              interface for the majority of users we could drastically increase
              speed and accuracy while reducing stress and improving the
              experience for them.
            </p>
            <SectionTitle>Build</SectionTitle>
            <p>
              The majority of the Phobio applications just use a simple MVC
              pattern with Django. However, because of the limited scope of this
              new app I decided it would be a good place to start modernizing
              the tech stack.
            </p>
            <p>
              The Django backend stayed intact but I built the client-side using
              React with Redux for state management and Glamorous for performant
              CSS-in-JS styles.
            </p>
            <p>
              I'd been involved in building several large React apps but his was
              the first time, outside of personal projects, I'd built one from
              scratch! It was an excellent learning experience for me and a step
              in the right direction for Phobio's codebase.
            </p>
            <FullWidth>
              <glamorous.Div maxWidth={Sizes.content} margin="0 auto">
                <SectionTitle css={{ color: "#fff", height: "500px" }}>
                  Result
                </SectionTitle>
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
