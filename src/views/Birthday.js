import React, { Component } from "react";
import { Spring, animated, config } from "react-spring";
import glamorous from "glamorous";
import MediaQueries from "../vars/MediaQueries";
import Sizes from "../vars/Sizes";
import Colors from "../vars/Colors";

class Birthday extends Component {
  render() {
    const Page = glamorous.div({
      height: '100vh',
      display: "flex",
      flexDirection: 'column',
      alignItems: 'center',
      background: Colors.darkerPink,
      [MediaQueries.md]: {
      },
    });
    const Header = glamorous.div({
        textAlign: 'center',
        marginTop: '2rem'
    });
    const Content = glamorous.div({
        margin: '2rem 0',
        background: Colors.background,
        width: '100%',
        maxWidth: '380px',
        borderRadius: '5px',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        '> p': {
            margin: '0'
        }
    });
    const CalBtn = glamorous.a({
        textDecoration: 'none',
        color: 'white',
        padding: '10px 20px',
        background: Colors.pink,
        borderRadius: '2px',
        transition: 'all 175ms',
        cursor: 'pointer',
        ':hover': {
            background: '#b35357'
        }
    });
    const Title = glamorous.h2({
      fontSize: Sizes.superhead,
      margin: '0'
    });
    return (
      <Page>
          <Header>
            <Title>Hey Y'all!</Title>
            <Title>It's my birthday</Title>
          </Header>
          <Content>
            <h3>Details</h3>
            <p>March <strong>19th</strong></p>
            <p>Meet at my place at <strong>1pm</strong> with bikes</p>
            <p>If you're not biking and just want to party <strong>4pm</strong> is when you'll want to show up</p>
            <p>The plan is to ride the east side in the afternoon and then rally back at my place for drinks and pizza.</p>
            <p>My last couple of birthdays have coincided with COVID spikes so I'm just really stoked to be able to see all your faces!</p>
          </Content>
          <CalBtn target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NzBvbTZlOWw3MHEzaWJiMTY0cGpjYjlrY2NwMzZiYjJjNHBqNmI5a2M4cm1hZTM2NzRzMzBjOWo2MCBmeWVka2EyQG0&amp;tmsrc=fyedka2%40gmail.com">
            Add This Very Important Event to Your Calendar By Clicking Here
        </CalBtn>
      </Page>
    );
  }
}

export default Birthday;
