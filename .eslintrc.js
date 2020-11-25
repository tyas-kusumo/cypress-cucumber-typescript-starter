module.exports = {
  plugins: ["@typescript-eslint", "prettier", "cypress"],
  extends: [
    "airbnb-typescript/base",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:cypress/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    "cypress/globals": true,
  },
  rules: {
    "prettier/prettier": ["error"],
    "import/prefer-default-export": 0,
    "no-console": 0,
  },
};
