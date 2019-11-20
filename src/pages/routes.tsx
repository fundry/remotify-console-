import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { inject, observer } from "mobx-react";

import { Dashboard, Login } from "./";
import Protected from "./protectedRoute";

const history = createBrowserHistory();

const Routes = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />

        <Protected
          path="/"
          authenticated={authenticated}
          component={Dashboard}
        />
        <Protected
          path="/profile"
          authenticated={authenticated}
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
};

export default inject("AuthStore")(observer(Routes));
