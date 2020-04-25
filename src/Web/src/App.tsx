import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { NavBar } from "./components/Menu/NavBar";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <BreadcrumbsProvider>
            <Switch>
              <Route path={"/"} component={() => <NavBar />} />
            </Switch>
          </BreadcrumbsProvider>
        </Router>
      </React.Fragment>
    );
  }
}
