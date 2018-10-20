import React, { Component } from "react";
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import ProjectCloseBtn from "../components/ProjectCloseBtn";
import ProjectModal from "../components/ProjectModal";
import Colors from "../vars/Colors";
import { width } from "window-size";
import { Parallax, ParallaxLayer } from "../../node_modules/react-spring";

class phobioOps extends Component {
  render() {
    const Hero = glamorous.div({
      background: Colors.yellow,
      height: "30vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    });
    const HeroTitle = glamorous.h1({
      fontFamily: "Oswald",
      fontWeight: 600,
      fontSize: Sizes.superhead,
      borderBottom: `2px solid ${Colors.text}`,
      margin: "0",
      paddingBottom: "1rem"
    });
    const HeroDesc = glamorous.p({
      margin: "0",
      paddingTop: "1rem",
      maxWidth: Sizes.content,
      fontStyle: "italic"
    });
    const SectionTitle = glamorous.h3({
      fontFamily: "Oswald",
      fontSize: Sizes.head
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
        <Parallax pages={1.3}>
          <ParallaxLayer offset={0} style={{}}>
            <Hero>
              <glamorous.Div maxWidth={Sizes.maxWidth}>
                <HeroTitle>Phobio Operations App</HeroTitle>
                <HeroDesc>
                  Phobio works with cell phone retailers to handle devices that
                  are traded-in by customers upgrading their devices
                </HeroDesc>
              </glamorous.Div>
            </Hero>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.5}>
            <glamorous.Div position="fixed" top="-225px" right="-55px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 334"
                height="500px"
                width="auto"
              >
                <path
                  fill="#91cbc8"
                  d="M3 80c-13 60 21 143 44 194 18 39 46 68 94 58 99-20 174-152 204-235v-1l-1 4v-1c23-63-6-111-72-96-49 11-80 80-130 86-39 5-128-61-139-9z"
                />
              </svg>
            </glamorous.Div>
            <glamorous.Div position="fixed" top="21vh" left="-5px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                width="600px"
                viewBox="0 0 516 225"
              >
                <path
                  fill="#f87d82"
                  d="M514 129c11-54-37-82-83-74-69 11-94 44-165 12-42-18-85-72-134-67C92 4 36 38 12 70c-36 45 15 144 71 152 59 8 114-32 169-28 69 4 214 98 262-65z"
                />
              </svg>
            </glamorous.Div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.3}>
            <glamorous.Div width="100%" height="100%" background="white">
              <glamorous.Div
                maxWidth={Sizes.content}
                margin="0 auto"
                background="white"
                paddingTop="3rem"
              >
                <SectionTitle>Need</SectionTitle>
                <p>
                  Phobio works with cell phone retailers to handle devices that
                  are traded-in by customers upgrading their devices. To the
                  customer it is presented a simple easy process but behind the
                  scenes there is quite an infrastructure to handle around a
                  million devices a year.
                </p>
                <p>
                  This project in particular was to redesign the internal
                  application that Phobio team members in the various warehouses
                  around the country use to track and managed all these devices.
                </p>
                <SectionTitle>Process</SectionTitle>
                <p>
                  The previous interation of the these tools usuable but far
                  from ideal. It presented the users with every piece of
                  information and every available option with very little
                  hierachy. And the last thing you want to be doing in a fast
                  pace warehouse enviroment is hunting through a dense screen of
                  information for the one option you need.
                </p>
                <p>
                  The problem was clear and so was the solution. By simplifying
                  the interface for the majority of users we could drastically
                  increase speed and accuracy while reducing stress and
                  improving the experience for them.
                </p>
                <SectionTitle>Build</SectionTitle>
                <p>
                  The majority of the Phobio applications just use a simple MVC
                  pattern with Django. However, because of the limited scope of
                  this new app I decided it would be a good place to start
                  modernizing the tech stack.
                </p>
                <p>
                  The Django backend stayed intact but I built the client-side
                  using React with Redux for state management and Glamorous for
                  performant CSS-in-JS styles.
                </p>
                <p>
                  I'd been involved in building several large React apps but his
                  was the first time, outside of personal projects, I'd built
                  one from scratch! It was an excellent learning experience for
                  me and a step in the right direction for Phobio's codebase.
                </p>
                <FullWidth>
                  <glamorous.Div maxWidth={Sizes.content} margin="0 auto">
                    <SectionTitle css={{ color: "#fff", height: "500px" }}>
                      Result
                    </SectionTitle>
                  </glamorous.Div>
                  <p />
                </FullWidth>
              </glamorous.Div>
            </glamorous.Div>
          </ParallaxLayer>
        </Parallax>
      </ProjectModal>
    );
  }
}

export default phobioOps;
