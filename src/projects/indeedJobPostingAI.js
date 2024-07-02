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
        <Hero bg={Colors.gray3}>
          <glamorous.Div maxWidth={Sizes.maxWidth}>
            <HeroTitle>Indeed Job Posting AI</HeroTitle>
            <HeroDesc css={{maxWidth: Sizes.content}}>
              Led the creation of the UI for the first ever job posting AI powered chatbot at Indeed
            </HeroDesc>
          </glamorous.Div>
          {/* <UpperPlx parallaxData={plxConfig}>
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
          </Plx> */}
        </Hero>
        <glamorous.Div width="100%" height="100%" background="white" paddingBottom="3rem">
          <Content css={{ background: "white", paddingTop: "3rem" }}>
          <SectionTitle>
            Background
          </SectionTitle>
            <p>
              Conversational work flows driven by AI are becoming more common and expected by customers. In response, the Job Posting team I was a part of developed the Employer Hiring Assistant, an AI-powered chatbot aimed at simplifying job posting processes and preempting market challengers. This initiative sought to meet growing customer expectations for intuitive interfaces, ensuring Indeed's competitive edge.
            </p>
            <p>
              This was the first such project at Indeed and only the second LLM driven chatbot product in the entire company. 
            </p>
          <SectionTitle>
            Role and Contributions
          </SectionTitle>
            <p>
            In my role as lead UI developer, I led the creation of the chatbot's interface. This involved translating design concepts into functional components, managing development tasks, and coding key UI elements. 
            </p>
            <p>
            Collaboration with UX designers was essential; together, we refined the chatbot's user experience through brainstorming and critique sessions. Since this was our first project of this kind we quickly learned that our usual process wouldn’t work. The initial user flows the designers presented to me were quite rigid and prescriptive which really clashed with the fluid non-determinative nature of an LLM/AI product. I found it really useful to bring the designers into our development early on and have talk to the chatbot to understand the experience better. It opened their eyes to how the designs would have to change and future iterations were a much better fit to the UX.  
            </p>
            <p>
            Before development began myself and the rest of the engineers created a formal software design document. I contributed to this process by defining UI specifications for seamless integration across not just our team but teams in other parts of the company who were planning on piggybacking off our work. I also broke the workload out into bite sized development tickets with detailed specifications so other team members could quickly pick them up.
            </p>
            <p>
            After the UX and technical designs were signed off on, I spearheaded the development of the chatbot's interface using React/TypeScript and adhering closely to our established design system. By meticulously translating design elements into robust components, I ensured seamless integration with the chatbot's backend functionalities. Since the UX design was less prescriptive due to the nature of AI’s non-deterministic responses, there was a lot of room for interpretation that required me to work closely with the designers. This approach not only maintained consistency across the application but also optimized performance and accessibility, delivering a sophisticated yet user-friendly interface for our AI chatbot.
            </p>
          <SectionTitle>
            Conclusion
          </SectionTitle>
            <p>
            The launch of the Employer Hiring Assistant set a new standard in job posting solutions, enhancing user satisfaction with its intuitive UI and boosting adoption rates. This project underscores my expertise in driving UI development for AI solutions and collaborating effectively to deliver impactful outcomes in user-centric design.
            </p>
          </Content>
        </glamorous.Div>
      </div>
    );
  }
}

export default indeedJobPostingAI;
