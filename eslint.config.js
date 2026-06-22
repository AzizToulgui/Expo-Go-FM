const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const prettier = require("eslint-plugin-prettier/recommended");
const reactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  prettier,

  {
    plugins: {
      "react-native": reactNative,
    },

    rules: {
      "prettier/prettier": "error",
      "react-native/no-unused-styles": "error",
    },

    ignores: ["dist/*"],
  },
]);
