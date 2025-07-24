import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node },
    rules: {
      'no-unused-vars': 'warn',
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'always'],
      'eqeqeq': ['error', 'always'],
      // 'no-console': 'warn',
      'capitalized-comments': ['error', 'always'],
      'indent': ['error', 2],
      'no-var': 'error'
    }
  },
]);
