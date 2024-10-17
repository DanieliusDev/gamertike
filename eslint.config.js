// @ts-check

import js from "@eslint/js";
import ts from "typescript-eslint";
import solid from "eslint-plugin-solid";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  solid.configs["flat/typescript"],
);
