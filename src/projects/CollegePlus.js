import React, { Component } from 'react';
import glamorous from "glamorous";
import { Link } from "react-router-dom";
import Sizes from "../vars/Sizes";
import ProjectBackBtn from "../components/ProjectBackBtn";
import ProjectModal from '../components/ProjectModal';
import { Hero } from "../components/ProjectLayout";

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
    return (
      <React.Fragment>
        <ProjectBackBtn />
        <Hero bg={hero} image>
          <h1 class='h4'>Redesigning the CollegePlus Home Page</h1>
          <h6 class='thin'>Or</h6>
          <h2 class='h4 thin'>"Design is more than making stuff pretty"</h2>
          <p class='italic pt4'>February 20th 2015</p>
        </Hero>
        <glamorous.Div maxWidth={Sizes.content} margin="0 auto">
          <p class='dropcap'>
          It was suffering from the bloat that comes from long periods of inattention, the pain anyone who has worked on a website redesign before will feel.
          </p>
          <p>Ideally, the design process is starting with a blank slate and building up. However, in the case of a redesign, it's more a case of reduction to remove accumulated parts that are assumed necessary. It follows that one of the most difficult parts of a website redesign is overcoming the expectations of stakeholders based on years of experience with previous designs.</p>
          <p>We started with a collection including 130+ pages of copy, videos, promotions, marketing campaigns, and defunct partnerships. More specifically there were at least a couple dozen top-tier pages. This made for a confusing user experience. I could talk for hours about the project, but for now, let's focus on one thing.</p>
          <h3 class='h5 italic center'>The Home Page</h3>
          <img src={plainOldHome} />
          <p>It was clear from the beginning that this was more than just a layout change. The page had problems in its color palette, layout, typography, and overall purpose. However, the biggest problem was this...</p>
          <img src={cirleOldHome} />
          <p>It doesn't look like much! However, it represents the main source of visitor confusion on the site. If you clicked the left button you'd stay on the main site but if you clicked the right button you'd be moved into what was essentially an entirely new site.</p>
          <img src={prepAndOldHome} />
          <p>Although the button looks like you merely are choosing between two different products you were actually choosing between two different brands.</p>
          <p>The analytics showed that splitting traffic like this wasn't working for us. At first, I thought it was just the design's fault so I started mocking up variations that would hopefully increase conversions.</p>
          <img src={psHomeConcepts} />
          <p>It just wasn't working though!</p>
          <p>It continues to surprise me how blind we can be to the obvious problem. In retrospective, it is clear this homepage shouldn't have been splitting traffic like we were trying to but it took me quite a while to realize this. When I finally did things started moving.</p>
          <p>Here's an early concept for a single purpose homepage. Notice however that the 2nd button from the original design is still sticking around as a small text link in the lower left corner. It's hard to convince product stakeholders to change sometimes.</p>
          <img src={videoConcept} />
          <p class='italic'>
            NOTE: The video background was awesome, but unnecessary. If you want to make one
            <a href='http://vodkabears.github.io/vide/'>here is a good starting place.</a>
          </p>
          <p>At this point the design had undergone a massive change but still had some unnecessary pieces.</p>
          <img src={crossedOutConcept} />
          <p>If the page wasn't focusing on the 2nd button then why did the link need to stay on the page? Did the homepage really need a video? If the main headline was reworked did we need a secondary line of copy?</p>
          <p>With those questions in mind I started heading in a very different direction. Trying to keep it in it's simplest form, just copy and a CTA.</p>
          <img src={cleanNewHome} />
          <p>
            But wait! Is that really going to be enough to draw the visitor into the content? What I needed now was a simple way to give a visitor a peek into our product without overwhelming them with the copy. This is where
            <a href='https://dribbble.com/ruthiefleming'>Ruthie</a>
            , our graphic designer, stepped in.
          </p>
          <img src={iconsNewHome} />
          <p>Those small illustrations were just what we needed to give visitors a quick idea of what the product did.</p>
          <p>
            I tested this in a
            <a href='https://usabilityhub.com/tour'>Usability Hub 5 Second Test</a>
            where users were shown the design with copy and illustrations. Amazingly the majority of users tested could understand something of what we did in just 5 seconds. This was unprecedented in the history of our product. It's a complex one! And it had always been difficult to explain even in person, let alone on the web.
          </p>
          <p>The rest of the page fell into place quickly. Including three sections of high-level copy about the purpose of the company, matching illustrations, and then finally a CTA to sign up for email updates.</p>
          <img src={longNewHome} />
          <h3 class='h5 italic center'>The Results</h3>
          <p>Now that the redesign has been live for some time and had thousands of visitors we can look at the data.</p>
          <p>The home page already had a low bounce rate at 36.42% however after launch the new site dropped that by 2.99% for a new low of 35.33%. Interestingly enough mobile traffic saw an even bigger drop of 3.90% in the bounce rate. I believe this is mostly due to increasing mobile optimization and much clearer mobile CTA's.</p>
          <p>
            Another interesting result shows up in the heat-maps from
            <a href='http://www.crazyegg.com/'>CrazyEgg.</a>
            Although the new homepage has had fewer visits than the old one there are definitely enough for a comparison.
          </p>
          <p>We can clearly see that the new design has focused user's clicks to a few areas. This improved the conversion rates and lowered the bounce rates.</p>
          <img src={crazyEgg} />
          <p>The more qualitative results were even more interesting. The feedback from various surveys and conversations with visitors showed that more than ever before people could easily understand what we do. They felt that the brand was trustworthy and they could easily find the information they were looking for.</p>
          <h3 class='h5 italic center'>Conclusion</h3>
          <p>This project ended up extending far beyond just the home page. In total it was six months work over dozens of pages and a custom Rails CMS.</p>
          <img src={githubStats} />
          <h3 class='h5'>Technology Used</h3>
          <ol>
            <li>Rails w/ Postgress</li>
            <li>Haml</li>
            <li>Sass w/ Bourbon and Neat</li>
            <li>SVG system built with Grunt</li>
            <li>Velocity.js for animations</li>
          </ol>
          <h3 class='h5'>Not a solo effort!</h3>
          <p>
            I worked with the great team of fellow designers
            <a href='https://github.com/julianhartnett'>Julian</a>
            and
            <a href='https://dribbble.com/ruthiefleming'>Ruthie</a>
            , developers
            <a href='https://github.com/mark-kraemer'>Mark</a>
            and
            <a href='https://github.com/nathanhamilton'>Nathan</a>
            , and support from
            Josh and Michael.
          </p>
  
            
        </glamorous.Div>
      </React.Fragment>
    )
  }
}

export default CollegePlus;
