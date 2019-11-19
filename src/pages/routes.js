import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import { Dashboard, Login } from "./";
import Protected from "./protectedRoute";

const history = createBrowserHistory();
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />

        <Protected path="/profile" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
