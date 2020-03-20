module.exports = {
  preset: "ts-jest/presets/js-with-ts", // https://kulshekhar.github.io/ts-jest/user/config/
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  globals: {
    "ts-jest": {
      babelConfig: ".babelrc"
    }
  },
  moduleNameMapper: {
    "\\.(png|jpg|gif|svg)$": "<rootDir>/src/__mocks__/file.ts",
    "\\.css$": "<rootDir>/src/__mocks__/style.ts"
  }
};
