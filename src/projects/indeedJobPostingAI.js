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

class indeedJobPostingAI extends Component {
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
            <HeroTitle>Indeed Job Posting AI</HeroTitle>
            <HeroDesc css={{maxWidth: Sizes.content}}>
              Led the creation of the UI for the first ever job posting AI powered chatbot at Indeed
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
            <p>

In today's fast-evolving digital landscape, conversational AI technologies are increasingly pivotal in enhancing user experiences across various domains. Recognizing the transformative potential of AI in job posting processes, Job Posting embarked on developing an innovative AI-powered chatbot, the Employer Hiring Assistant. This initiative aimed not only to streamline job posting procedures but also to preempt potential disruptions from emerging competitors.
            </p>


<SectionTitle>Context and Objectives</SectionTitle>

Job Posting envisioned the AI-powered chatbot as a strategic move to meet evolving customer expectations for intuitive and efficient conversational interfaces. The goal was to empower employers with a seamless tool that simplifies job posting, candidate interaction, and hiring decisions. This proactive approach was crucial to maintaining Job Posting's leadership in the job posting market and ensuring future readiness against competitive advancements.

<SectionTitle>
  Role and Contributions
</SectionTitle>

<SectionTitle>
UI Development Leadership:
</SectionTitle>
As the lead UI developer for the Employer Hiring Assistant project, my role encompassed spearheading the creation of the chatbot's user interface. This involved translating conceptual designs into functional components that aligned with both technical feasibility and user experience objectives. I initiated the project by meticulously defining and prioritizing development tickets, delegating tasks among team members, and personally contributing substantial portions of the UI-specific codebase. By overseeing the UI implementation, I ensured that the chatbot not only met design specifications but also delivered a cohesive and intuitive user interface.

<SectionTitle>
Collaboration with UX Designers:
</SectionTitle>
Effective collaboration with UX designers was integral to shaping the Employer Hiring Assistant's design. Through regular brainstorming sessions, design critiques, and ad hoc working meetings, I actively contributed insights and feedback to refine the chatbot's user experience. By fostering an environment of open communication and constructive critique, I helped bridge the gap between design concepts and practical implementation, ensuring that the final UI design not only met but exceeded user expectations.

<SectionTitle>
Influencing Technical Design:
</SectionTitle>
Beyond UI development, I played a pivotal role in influencing the technical design of the AI Hiring Assistant. I authored comprehensive UI specifications for inclusion in the engineering technical design documentation. These specifications outlined critical interface elements, interaction patterns, and integration requirements necessary for seamless collaboration between front-end and back-end development teams. By defining clear technical guidelines, I facilitated a cohesive development process that aligned with overarching project goals and technical feasibility.

<SectionTitle>
Outcome and Impact
</SectionTitle>

The launch of the Employer Hiring Assistant marked a significant milestone for Job Posting, establishing a new benchmark in user-centric job posting solutions. By leveraging AI capabilities, the chatbot empowered employers to effortlessly navigate the complexities of job posting, from initial listing creation to candidate engagement and final hiring decisions. The intuitive and responsive UI I helped develop contributed to a positive user reception, enhancing user satisfaction and adoption rates.

Moreover, my contributions to the technical and design aspects ensured that the AI Hiring Assistant was not only innovative but also robust and scalable. This positioned Job Posting at the forefront of technological innovation in the job posting sector, reinforcing its reputation as a leader in leveraging AI to enhance customer experience and operational efficiency.

<SectionTitle>
Conclusion
</SectionTitle>

The Employer Hiring Assistant project exemplifies my proficiency in driving UI development for AI-driven solutions, collaborating effectively with cross-functional teams, and influencing both design and technical aspects to deliver impactful outcomes. Moving forward, I am committed to leveraging my expertise in UI/UX design and AI integration to continue driving innovation and delivering exceptional user experiences in future projects.

This case study demonstrates my ability to lead and execute transformative projects that combine cutting-edge technology with user-centered design principles, making me a valuable asset to any organization seeking to innovate and stay ahead in the digital landscape.
          </Content>
        </glamorous.Div>
      </div>
    );
  }
}

export default indeedJobPostingAI;
