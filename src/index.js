import React from "react";
import ReactDOM from "react-dom";
import Store from "./Store";
import Screen from "./Screens";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Screen />
    </Store>
  </React.StrictMode>,
  rootElement
);
