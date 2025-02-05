import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import react from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/', 'public/', 'dist/', '**/*.min.js', '**/vendor/*.js'],
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: react,
      'react-hooks': reactHooks,
    },
  },

  pluginJs.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Отключаем требование явных типов для функций
      '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение при использовании any
    },
  },

  {
    files: ['**/*.{jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Отключаем проверку scope для React (React 17+)
      'react/jsx-uses-react': 'off', // Отключаем проверку использования React в JSX (React 17+)
      'react-hooks/rules-of-hooks': 'error', // Обязательное соблюдение правил хуков
      'react-hooks/exhaustive-deps': 'warn', // Предупреждение о неполном списке зависимостей хуков
    },
  },

  {
    rules: {
      indent: ['error', 2], // Использовать отступы в 2 пробела
      semi: ['error', 'always'], // Требовать точку с запятой в конце строк
      'no-console': 'warn', // Предупреждение при использовании console.log
      'no-debugger': 'error', // Запретить использование debugger
    },
  },
];
