import React, { Component } from "react";
import glamorous from "glamorous";
import Sizes from "../vars/Sizes";
import MediaQueries from "../vars/MediaQueries";
import Colors from "../vars/Colors";
import ProjectBackBtn from "../components/ProjectBackBtn";
import p1 from "../images/theShortcut/closing-image.jpg";

const Plaque = glamorous.div({
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: Sizes.content,
  margin: "0 auto",
  padding: "0 2rem"
});
const Title = glamorous.h2({});
const Desc = glamorous.p({});
const StyledImg = glamorous.img({
  width: "100vw"
});
const TheShortcut = props => {
  return (
    <React.Fragment>
      <ProjectBackBtn absolute />
      <glamorous.Div margin="4rem auto" maxWidth={Sizes.maxWidth}>
        <glamorous.Div
          position="relative"
          padding-bottom="56.25%"
          height="0"
          margin="0"
          maxWidth={Sizes.maxWidth}
        >
          <glamorous.Iframe
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/1hd-xp7OWk4"
            border="0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </glamorous.Div>
      </glamorous.Div>
      <Plaque>
        <Title>The Shortcut</Title>
        <StyledImg href={p1} />
          <p>
            I've always had this curiosity. As a kid, it was satisfied by
            wandering farther and farther into the bushes behind the house. As I
            grew up so did the scope of these explorations. It can be as simple
            as discovering what is at the end of that "dead-end" street on the
            next block or, as in this particular case, much more complex and
            time-consuming.
          </p>
          <p>
            Texas is defined by it's privately held land. In a state known for
            its vast empty spaces, the average citizen is contained to thin
            strips of public land, roads, and parks, sandwiched in between huge
            tracts with "no trespassing" emblazoned on their gates.
          </p>
          <p>
            In case you think I'm exaggerating only 4% of Texas is public land.
            That's the same as Ohio. One state over, New Mexico is 47% public
            land.
          </p>
          <p>
            Politics aside, this can be incredibly frustrating for someone like
            myself who is driven by their curiosity to explore. However, as with
            many types of adversity, these challenges have created some very
            clever solutions. They force us to look for hidden paths and disused
            routes.
          </p>
          <p>
            Which brings us to this story. It's the story of a cycling route
            that was born out of limitations I just described. A route that
            under ordinary circumstances would be laughable.
          </p>
          <iframe
            height="405"
            width="590"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/activities/2187102328/embed/3c0b465d5c661cabd6f4c09cfb76b707a2a6ec36"
          />
          <p>
            To ride out Fitzhugh and back through Bee Creek/Cave, and be
            reasonably safe, you typically have to take the route shown above.
            This is a beautiful ride but gets to be a pretty long day. If you
            want to shorten the route you'd have to ride east on Hamilton Pool
            Rd. which any self-respecting Austin cyclist will tell you is a
            terribly dangerous idea.
          </p>
          <p>
            My idea was to shorten the original route by passing through a thin
            strip public land that runs along the Pedernales River. I knew there
            were some mountain bike trails on that land but it didn't look like
            they went all the way through. I combed through all the public land
            records I could find and spent a good amount of time looking at
            satellite images.
          </p>
          <iframe
            height="405"
            width="590"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://www.strava.com/activities/1582766921/embed/ff31689487798fb9328c55597e7c37ddfe7da3c8"
          />
          <p>
            And well, it worked! As you can see the route was significantly
            shorter with much less climbing. But most importantly it satisfied
            that love of getting lost, seeing something you haven't seen before,
            and finding your way out.
          </p>
          <p>
            Researching and riding routes like this have become one of my
            favorite hobbies. If you have any questions about this one or any
            other dubious shortcuts give me a shout!
          </p>
        <StyledImg src={p1} />
      </Plaque>
    </React.Fragment>
  );
};
export default TheShortcut;
