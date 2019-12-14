import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const init = () => {
  const root = document.createElement("div");
  document.body.appendChild(root);
  ReactDOM.render(<App />, root);
};

init();
