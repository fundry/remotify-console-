import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

interface Props {
  component: any;
  path: String;
  exact: any;
  // props: any
}

const ProtectedRoute = (
  { component: Component, exact, path, ...rest }: Props,
  props
) => {
  // const { authenticated } = props.AuthStore
  console.log(props);

  const [authenticated, Setauthenticated] = useState<Boolean>(false);

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
