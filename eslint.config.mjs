// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 2021, // Updated to a more modern version to support ES2021 features
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      // Prettier integration
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          bracketSpacing: true,
          trailingComma: 'all',
        },
      ],

      // Specific formatting rules
      'object-curly-spacing': ['error', 'always'], // Enforces spaces inside curly braces
      quotes: ['error', 'single'], // Enforces single quotes
      semi: ['error', 'always'], // Enforces semicolons at the end of statements

      // TypeScript-specific rules
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
);
