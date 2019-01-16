import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import ProjectBackBtn from "../components/ProjectBackBtn";
import {
  Hero,
  HeroTitle,
  HeroDesc,
  Content,
  SectionTitle,
  SublteLink,
} from "../components/ProjectLayout";

import cirleOldHome from "../images/cp-homepage/circle-old-home.jpeg";
import cleanNewHome from "../images/cp-homepage/clean-new-home.jpeg";
import crazyEgg from "../images/cp-homepage/crazy-egg.jpeg";
import crossedOutConcept from "../images/cp-homepage/crossed-out-concept.jpeg";
import githubStats from "../images/cp-homepage/github-stats.png";
import hero from "../images/cp-homepage/hero.jpg";
import iconsNewHome from "../images/cp-homepage/icons-new-home.jpeg";
import longNewHome from "../images/cp-homepage/long-new-home.jpeg";
import plainOldHome from "../images/cp-homepage/plain-old-home.jpeg";
import prepAndOldHome from "../images/cp-homepage/prep-and-old-home.jpeg";
import psHomeConcepts from "../images/cp-homepage/ps-home-concepts.jpg";
import videoConcept from "../images/cp-homepage/video-concept.gif";

class CollegePlus extends Component {
  render() {
    const StyledImg = glamorous.img({
      width: "100%"
    })
    return (
      <React.Fragment>
        <ProjectBackBtn />
        <Hero bg={hero} image>
          <glamorous.Div maxWidth={Sizes.maxWidth} textAlign="center">
            <HeroTitle white>Redesigning the CollegePlus Homepage</HeroTitle>
            <HeroDesc white>"Design is more than making stuff pretty"</HeroDesc>
            <p style={{color: "white"}}>February 20th 2015</p>
          </glamorous.Div>
        </Hero>
        <Content css={{marginTop: "4rem", marginBottom: "4rem"}}>
          <p>
            The CollegePlus site was suffering from the bloat that comes from long periods of
            inattention, the pain anyone who has worked on a website redesign
            before will feel.
          </p>
          <p>
            Ideally, the design process is starting with a blank slate and
            building up. However, in the case of a redesign, it's more a case of
            reduction to remove accumulated parts that are assumed necessary. It
            follows that one of the most difficult parts of a website redesign
            is overcoming the expectations of stakeholders based on years of
            experience with previous designs.
          </p>
          <p>
            We started with a collection including 130+ pages of copy, videos,
            promotions, marketing campaigns, and defunct partnerships. More
            specifically there were at least a couple dozen top-tier pages. This
            made for a confusing user experience. I could talk for hours about
            the project, but for now, let's focus on one thing.
          </p>
          <SectionTitle>The Homepage</SectionTitle>
          <StyledImg src={plainOldHome} />
          <p>
            It was clear from the beginning that this was more than just a
            layout change. The page had problems in its color palette, layout,
            typography, and overall purpose. However, the biggest problem was
            this...
          </p>
          <StyledImg src={cirleOldHome} />
          <p>
            It doesn't look like much! However, it represents the main source of
            visitor confusion on the site. If you clicked the left button you'd
            stay on the main site but if you clicked the right button you'd be
            moved into what was essentially an entirely new site.
          </p>
          <StyledImg src={prepAndOldHome} />
          <p>
            Although the button looks like you merely are choosing between two
            different products you were actually choosing between two different
            brands.
          </p>
          <p>
            The analytics showed that splitting traffic like this wasn't working
            for us. At first, I thought it was just the design's fault so I
            started mocking up variations that would hopefully increase
            conversions.
          </p>
          <StyledImg src={psHomeConcepts} />
          <p>It just wasn't working though!</p>
          <p>
            It continues to surprise me how blind we can be to the obvious
            problem. In retrospective, it is clear this homepage shouldn't have
            been splitting traffic like we were trying to but it took me quite a
            while to realize this. When I finally did things started moving.
          </p>
          <p>
            Here's an early concept for a single purpose homepage. Notice
            however that the 2nd button from the original design is still
            sticking around as a small text link in the lower left corner. It's
            hard to convince product stakeholders to change sometimes.
          </p>
          <StyledImg src={videoConcept} />
          <p class="italic">
            NOTE: The video background was awesome, but unnecessary. If you want
            to make one
            <SublteLink href="http://vodkabears.github.io/vide/">
              here is a good starting place.
            </SublteLink>
          </p>
          <p>
            At this point the design had undergone a massive change but still
            had some unnecessary pieces.
          </p>
          <StyledImg src={crossedOutConcept} />
          <p>
            If the page wasn't focusing on the 2nd button then why did the link
            need to stay on the page? Did the homepage really need a video? If
            the main headline was reworked did we need a secondary line of copy?
          </p>
          <p>
            With those questions in mind I started heading in a very different
            direction. Trying to keep it in it's simplest form, just copy and a
            CTA.
          </p>
          <StyledImg src={cleanNewHome} />
          <p>
            But wait! Is that really going to be enough to draw the visitor into
            the content? What I needed now was a simple way to give a visitor a
            peek into our product without overwhelming them with the copy. This
            is where
            <SublteLink href="https://dribbble.com/ruthiefleming">Ruthie</SublteLink>, our graphic
            designer, stepped in.
          </p>
          <StyledImg src={iconsNewHome} />
          <p>
            Those small illustrations were just what we needed to give visitors
            a quick idea of what the product did.
          </p>
          <p>
            I tested this in a
            <SublteLink href="https://usabilityhub.com/tour">
              Usability Hub 5 Second Test
            </SublteLink>
            where users were shown the design with copy and illustrations.
            Amazingly the majority of users tested could understand something of
            what we did in just 5 seconds. This was unprecedented in the history
            of our product. It's a complex one! And it had always been difficult
            to explain even in person, let alone on the web.
          </p>
          <p>
            The rest of the page fell into place quickly. Including three
            sections of high-level copy about the purpose of the company,
            matching illustrations, and then finally a CTA to sign up for email
            updates.
          </p>
          <StyledImg src={longNewHome} />
          <SectionTitle>The Results</SectionTitle>
          <p>
            Now that the redesign has been live for some time and had thousands
            of visitors we can look at the data.
          </p>
          <p>
            The homepage already had a low bounce rate at 36.42% however after
            launch the new site dropped that by 2.99% for a new low of 35.33%.
            Interestingly enough mobile traffic saw an even bigger drop of 3.90%
            in the bounce rate. I believe this is mostly due to increasing
            mobile optimization and much clearer mobile CTA's.
          </p>
          <p>
            Another interesting result shows up in the heat-maps from
            <SublteLink href="http://www.crazyegg.com/">CrazyEgg.</SublteLink>
            Although the new homepage has had fewer visits than the old one
            there are definitely enough for a comparison.
          </p>
          <p>
            We can clearly see that the new design has focused user's clicks to
            a few areas. This improved the conversion rates and lowered the
            bounce rates.
          </p>
          <StyledImg src={crazyEgg} />
          <p>
            The more qualitative results were even more interesting. The
            feedback from various surveys and conversations with visitors showed
            that more than ever before people could easily understand what we
            do. They felt that the brand was trustworthy and they could easily
            find the information they were looking for.
          </p>
          <SectionTitle>Conclusion</SectionTitle>
          <p>
            This project ended up extending far beyond just the home page. In
            total it was six months work over dozens of pages and a custom Rails
            CMS.
          </p>
        </Content>
      </React.Fragment>
    );
  }
}

export default CollegePlus;
