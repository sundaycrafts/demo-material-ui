import { lightTheme, darkTheme } from "./theme";

test("dark theme has correct type", () => {
  expect(darkTheme.palette.type).toEqual("dark");
});

test("light theme has correct type", () => {
  expect(lightTheme.palette.type).toEqual("light");
});
