import React from "react";

import List from "./List";
import { Header } from "../../components";
import Info from "./info";

const Workers = (): JSX.Element => {
  return (
    <div>
      <Header DoubleHeader={false} />

      <div>
        <Info />

        <List />

        <br />
      </div>
    </div>
  );
};

export default Workers;
