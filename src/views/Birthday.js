import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import glamorous from "glamorous";
import MediaQueries from "../vars/MediaQueries";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";
import { googleCalendarEventUrl } from "google-calendar-url";

const url = googleCalendarEventUrl({
  start: "20220319T130000",
  end: "20220319T200000",
  title: "Ian's Birthday Ride (Party starts at 4pm)",
  details: "Come ramble around the east side and session some trails with me! Meetup at my house and we'll end up back there for drinks and pizza. If you're not riding 4pm is a good arrival time.",
  location: "5517 Northdale Dr, Austin, TX 78723",
});

class Birthday extends Component {
  state = { direction: "left" };
  componentDidMount() {
    window.addEventListener("deviceorientation", this.handleTilt);
    window.addEventListener("mousemove", this.handleMove);
  }
  handleTilt = (e) => {
    // gamma is the left-to-right tilt in degrees, where right is positive
    const devicePos = e.gamma;
    // beta is the front-to-back tilt in degrees, where front is positive
    const tiltFB = e.beta;
    // alpha is the compass direction the device is facing in degrees
    const dir = e.alpha;
    if (devicePos < -5 && this.state.direction === "right") {
      this.setState({ direction: "left" });
    }
    if (devicePos > 5 && this.state.direction === "left") {
      this.setState({ direction: "right" });
    }
  };
  handleMove = (e) => {
    const middle = window.innerWidth / 2;
    if (e.screenX < middle && this.state.direction === "right") {
      this.setState({ direction: "left" });
    }
    if (e.screenX > middle && this.state.direction === "left") {
      this.setState({ direction: "right" });
    }
  };
  render() {
    const Page = glamorous.div({
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: Colors.darkerPink,
      padding: "0 2rem",
    });
    const Header = glamorous.div({
      textAlign: "center",
      marginTop: "2rem",
    });
    const Content = glamorous.div({
      margin: "2rem 0",
      background: Colors.background,
      width: "100%",
      maxWidth: "380px",
      borderRadius: "5px",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      "> p": {
        margin: "0",
      },
    });
    const CalBtn = glamorous.a({
      fontSize: Sizes.super,
      textDecoration: "none",
      color: "white",
      padding: "15px 25px",
      background: "#b35357",
      borderRadius: "2px",
      transition: "all 175ms",
      cursor: "pointer",
      textAlign: "center",
      marginBottom: "2rem",
      ":hover": {
        background: Colors.pink,
      },
    });
    const Title = glamorous.h2({
      fontSize: Sizes.superhead,
      margin: "0",
    });
    return (
      <Page>
        <Spring
          from={{
            transform:
              this.state.direction === "left"
                ? "rotate(15deg)"
                : "rotate(-15deg)",
          }}
          to={{
            transform:
              this.state.direction === "left"
                ? "rotate(-15deg)"
                : "rotate(15deg)",
          }}
          native
        >
          {(styles) => (
            <animated.div style={{ ...styles }}>
              <Header>
                <Title>Hey Y'all!</Title>
                <Title>It's my birthday</Title>
              </Header>
            </animated.div>
          )}
        </Spring>
        <Content>
          <h3>Details</h3>
          <p>
            Saturday March <strong>19th</strong>
          </p>
          <p>
            <strong>5517 Northdale Dr</strong>
          </p>
          <p>
            Meet at <strong>1pm</strong> if you're going on the bike ride
          </p>
          <p>
            If you're not biking and just want to party <strong>4pm</strong> is
            when you'll want to show up
          </p>
          <p>
            The plan is to ride the east side in the afternoon and then rally
            back at my place for drinks and pizza.
          </p>
          <p>
            Any bike that can go offroad will do but we're probably going to
            session some jumps so do with that what you will ¯\_(ツ)_/¯
          </p>
          <p>
            My last couple of birthdays have coincided with COVID spikes so I'm
            just really stoked to be able to see all your faces!
          </p>
        </Content>
        <CalBtn
          target="_blank"
          //   href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NzBvbTZlOWw3MHEzaWJiMTY0cGpjYjlrY2NwMzZiYjJjNHBqNmI5a2M4cm1hZTM2NzRzMzBjOWo2MCBmeWVka2EyQG0&amp;tmsrc=fyedka2%40gmail.com"
          href={url}
        >
          Add This Very Important Event to Your Calendar By Clicking Here
        </CalBtn>
      </Page>
    );
  }
}

export default Birthday;
