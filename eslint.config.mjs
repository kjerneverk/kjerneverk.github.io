import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores([
        "dist/**",
        "node_modules/**",
        "**/*.test.ts",
        "**/*.test.tsx",
    ]),
    {
        extends: compat.extends(
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:react/recommended",
            "plugin:react-hooks/recommended"
        ),

        plugins: {
            "@typescript-eslint": typescriptEslint,
            "import": importPlugin,
            "react": react,
            "react-hooks": reactHooks,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: "detect",
            },
        },

        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/explicit-function-return-type": "off",

            "@typescript-eslint/no-unused-vars": ["warn", {
                argsIgnorePattern: "^_",
            }],

            indent: ["error", 4, {
                SwitchCase: 1,
            }],

            "import/extensions": ["off"], // Not needed for Vite projects

            "import/no-extraneous-dependencies": ["error", {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            }],

            "no-console": ["warn"],

            "react/react-in-jsx-scope": "off", // Not needed in React 17+
            "react/prop-types": "off", // Using TypeScript for prop validation
            "react/no-unescaped-entities": "off", // Allow apostrophes in JSX text
        },
    }
]);
