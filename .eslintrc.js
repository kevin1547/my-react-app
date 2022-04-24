module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": 0,
    "react/jsx-key": 0,
    "react/prop-types": 0,
    "no-unused-vars": 0,
  },
};
