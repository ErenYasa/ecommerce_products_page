import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            "airbnb-base",
            "airbnb-typescript/base",
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "prettier",
        ],
        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        ignores: [
            ".eslintrc.cjs",
            "**/dist/**",
            "**/node_modules/**",
            "*.json",
        ],
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "unused-imports": unusedImports,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "sort-imports": [
                "error",
                {
                    ignoreDeclarationSort: true,
                },
            ],
            "import/extensions": [
                "error",
                "ignorePackages",
                {
                    "": "never",
                    js: "never",
                    jsx: "never",
                    ts: "never",
                    tsx: "never",
                },
            ],
            "no-alert": "off",
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-use-before-define": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "max-classes-per-file": "off",
            "class-methods-use-this": "off",
            "@typescript-eslint/naming-convention": "off",
            "import/no-extraneous-dependencies": "off",
            "prettier/prettier": [
                "error",
                {
                    usePrettierrc: true,
                },
            ],
            "no-underscore-dangle": [
                "error",
                {
                    allowAfterThis: true,
                },
            ],
            "import/prefer-default-export": 0,
            "global-require": "off",
            "no-console": 0,
            "no-plusplus": 0,
            "no-tabs": 1,
            "@typescript-eslint/lines-between-class-members": [
                "error",
                "always",
                {
                    exceptAfterOverload: false,
                },
            ],
            "camel-case": 0,
            "@typescript-eslint/no-inferrable-types": "off",
            camelcase: 0,
            "no-promise-executor-return": 0,
            "no-async-promise-executor": 0,
            "no-param-reassign": "off",
            "no-nested-ternary": "off",
            "prefer-const": [
                "error",
                {
                    destructuring: "any",
                    ignoreReadBeforeAssign: true,
                },
            ],
            curly: ["error", "multi-or-nest"],
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": "off",
        },
    }
);
