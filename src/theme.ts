import { useState } from "react";
import styles from "./figma-styles.json";
import { PaletteType } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles";

// A custom theme for this app
// available options: https://material-ui.com/customization/default-theme/?expand-path=$.palette
export const darkTheme = {
  palette: {
    type: "dark" as PaletteType,
    primary: {
      main: styles["Primary / 700"].color
    },
    secondary: {
      main: styles["Secondary / 700"].color
    },
    error: {
      main: styles["Error / 700"].color
    },
    info: {
      main: styles["Primary / 700"].color
    },
    success: {
      main: styles["Success / 700"].color
    },
    background: {
      default: styles["Background / default"].color,
      paper: styles["Surface / L1"].color
    },
    text: {
      primary: styles["On primary / light"].color,
      secondary: styles["On secondary / light"].color,
      disabled: styles["On background / disable"].color
    },
    divider: styles["On background / mid emphasis - alt"].color
  }
};

export const lightTheme = {
  palette: {
    type: "light" as PaletteType
  }
};

export const useTheme = (): [ThemeOptions, () => void] => {
  const [theme, setTheme] = useState<ThemeOptions>(darkTheme);
  return [
    theme,
    () => setTheme(theme.palette?.type === "light" ? lightTheme : darkTheme)
  ];
};
