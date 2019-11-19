import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { inject, observer } from "mobx-react";

import { Dashboard, Login } from "./";
import Protected from "./protectedRoute";

const history = createBrowserHistory();

const Routes = (): JSX.Element => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />

        <Protected exact path="/" component={Dashboard} />
        <Protected exact path="/profile" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
