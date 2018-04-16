/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Animate from "./components/Animate";
import Bio from "./views/Bio";
import Work from "./views/Work";
import Life from "./views/Life";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Bio} />
              <Route path="/work" children={({ match, ...rest }) => (
                <Animate match={match}>
                  { match && <Work match={match} {...rest} /> }
                </Animate>
              )} />
              <Route path="/life" children={({ match, ...rest }) => (
                <Animate match={match}>
                  { match && <Life match={match} {...rest} /> }
                </Animate>
              )} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
