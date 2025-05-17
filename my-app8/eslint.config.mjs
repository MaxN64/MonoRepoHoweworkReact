// eslint.config.mjs
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Основная конфигурация для JS/JSX
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: { jsx: true },
      globals: globals.browser, // браузерные глобальные переменные
    },
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
      "react-hooks": pluginReactHooks,
    },
    settings: {
      react: { version: "detect" }, // автопоиск версии React
    },
    extends: [
      js.configs.recommended, // базовые правила ESLint
      pluginReact.configs.flat.recommended, // правила React (flat-config)
      pluginJsxA11y.configs.recommended, // правила доступности в JSX
      pluginReactHooks.configs.recommended, // правила React Hooks
      "plugin:prettier/recommended", // интеграция с Prettier
    ],
    rules: {
      // Ваши дополнительные правила
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },

  // Отдельная подсекция для Jest-тестов
  {
    files: ["**/*.test.{js,jsx}", "**/*.spec.{js,jsx}"],
    languageOptions: {
      globals: { jest: true }, // jest-глобалы: describe, it, expect и т.п.
    },
    // Здесь можно добавить или переопределить правила для тестов
  },
]);
