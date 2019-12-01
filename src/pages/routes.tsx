import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import { inject, observer } from "mobx-react";

import {
  MagicAuth,
  Dashboard,
  Login,
  Profile,
  Members,
  DepartmentPage
} from "./";
import Protected from "./protectedRoute";

const history = createBrowserHistory();

const Routes = (props): JSX.Element => {
  const { authenticated } = props.AuthStore;
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/auth" component={MagicAuth} />

        <Protected
          path="/dashboard"
          authenticated={authenticated}
          component={Dashboard}
        />

        <Protected
          path="/profile"
          authenticated={authenticated}
          component={Profile}
        />

        <Protected
          path="/members"
          authenticated={authenticated}
          component={Members}
        />

        <Protected
          path="/members/:id"
          authenticated={authenticated}
          component={DepartmentPage}
        />
      </Switch>
    </Router>
  );
};

export default inject("AuthStore")(observer(Routes));
