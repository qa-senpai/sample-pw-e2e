// @ts-check
import eslint from "@eslint/js";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-plugin-playwright/recommended"
  ),
];
