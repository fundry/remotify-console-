import React , { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [ isAuth , setisAuth ] = useState(false)

  return(
    <div>
        <Route
          render={props =>
            isAuth ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" message="Please Signin to continue " />
            )
          }
          {...rest}
        />
    </div>

  )
};

export default ProtectedRoute;
