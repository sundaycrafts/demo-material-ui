import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "./theme";

export const App = () => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <h1>Hello world!</h1>
    </ThemeProvider>
  );
};
