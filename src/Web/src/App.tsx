import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { NavButton } from "./Components/Menu/NavButton";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <BreadcrumbsProvider>
            <Switch>
              <Route path={"/"} component={NavButton} />
            </Switch>
          </BreadcrumbsProvider>
        </Router>
      </React.Fragment>
    );
  }
}
