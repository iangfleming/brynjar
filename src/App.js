/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { Keyframes, animated, config } from "react-spring";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Work from "./views/Work";
import Life from "./views/Life";
import glamorous from "glamorous";
import Colors from "./vars/Colors";
const WorkPanel = Keyframes.Spring({
  0: { to: { width: "50vw" } },
  1: { to: { width: "95vw" } },
  2: { to: { width: "5vw" } }
});
const LifePanel = Keyframes.Spring({
  0: { to: { width: "50vw" } },
  1: { to: { width: "5vw" } },
  2: { to: { width: "95vw" } }
});

class App extends Component {
  state = {
    panelKey: "0"
  };
  panelCb = key => {
    this.setState({ panelKey: key });
  };
  render() {
    const { panelKey } = this.state;
    return (
      <BrowserRouter>
        <glamorous.Div display="flex">
          <WorkPanel state={panelKey} native>
            {styles => (
              <animated.div
                style={{ ...styles, background: Colors.yellow, height: "100vh" }}
                onClick={() => this.setState({ panelKey: "1" })}
              >
                <Work panelKey={panelKey}/>
              </animated.div>
            )}
          </WorkPanel>
          <LifePanel state={panelKey} native>
            {styles => (
              <animated.div
                style={{ ...styles, background: Colors.teal, height: "100vh" }}
                onClick={() => this.setState({ panelKey: "2" })}
              >
                <Life panelKey={panelKey}/>
              </animated.div>
            )}
          </LifePanel>
        </glamorous.Div>
      </BrowserRouter>
    );
  }
}

export default App;
