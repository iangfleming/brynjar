/* global location */
/* eslint no-restricted-globals: ["off", "location"] */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageTransition from "react-router-page-transition";
import Navbar from "./components/Navbar";
import Work from "./views/Work";
import Life from "./views/Life";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route
            render={({ location }) => (
              <PageTransition timeout={500}>
                <Switch location={location}>
                  <Route exact path="/work" component={Work} />
                  <Route path="/life" component={Life} />
                </Switch>
              </PageTransition>
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
