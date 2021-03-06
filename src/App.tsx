import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "mobx-react";

import config from "./data/config";
import Route from "./pages/routes";
import { AuthStore, DepartmentStore, MagicAuth } from "./state/";

//all routes will come here
function App(): JSX.Element {
  return (
    <Provider
      AuthStore={AuthStore}
      MagicAuth={MagicAuth}
      DepartmentStore={DepartmentStore}
    >
      <ApolloProvider client={config}>
        <Route />
      </ApolloProvider>
    </Provider>
  );
}

export default App;
