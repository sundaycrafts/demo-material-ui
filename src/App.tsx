import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const App = () => (
  <>
    <GlobalStyle />
    <h1>Hello world!</h1>
  </>
);
