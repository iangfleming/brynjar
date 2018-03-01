/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import Navbar from "./components/Navbar";
import Work from "./views/Work";
import Life from "./views/Life";
import glamorous from "glamorous";

class App extends Component {
  render() {
    const SwitchWrapper = glamorous.div({
      transition: "all 500ms cubic-bezier(0.5, 0, 0.1, 1)",
      opacity: 0
    });
    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1 }
    };
    const duration = 500;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <TransitionGroup>
            <Transition key={location.key} timeout={duration}>
              {status => (
                <SwitchWrapper
                  style={{
                    ...transitionStyles[status]
                  }}
                >
                  <Switch location={location}>
                    <Route exact path="/work" component={Work} />
                    <Route path="/life" component={Life} />
                  </Switch>
                </SwitchWrapper>
              )}
            </Transition>
          </TransitionGroup>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
