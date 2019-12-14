module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  env: {
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended", // which will adjust the one from eslint appropriately for TypeScript
    "plugin:react/recommended",
    "prettier/@typescript-eslint" // Make sure to put it last, so it gets the chance to override other configs.
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  ignorePatterns: ["*.spec.tsx", "*.spec.ts", "*.stories.tsx"],
  rules: {
    "no-console": 2,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_"
      }
    ],
    complexity: [
      2,
      {
        max: 3
      }
    ],
    "max-depth": [
      2,
      {
        max: 2
      }
    ],
    "max-lines": [
      2,
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-params": [
      2,
      {
        max: 3
      }
    ],
    "import/no-default-export": 2
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
