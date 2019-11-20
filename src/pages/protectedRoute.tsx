import React from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

interface CustomProps {
  component: any;
  path: String;
  exact: any;
}

const ProtectedRoute = (
  props,
  { component: Component, exact, path, ...rest }: CustomProps
) => {
  // const { authenticated } = props.AuthStore
  const { authenticated } = props.AuthStore;

  return (
    <div>
      <Route
        render={props =>
          authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" message="Please Signin to continue " />
          )
        }
        {...rest}
      />
    </div>
  );
};

export default inject("AuthStore")(observer(ProtectedRoute));
