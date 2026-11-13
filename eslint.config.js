import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// 1. Импортируем TS-инструменты
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config( // Используем хелпер для типизации конфига
  { ignores: ['dist', 'node_modules'] },
  {
    // 2. Расширяем рекомендуемыми правилами JS и TS
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // 3. Добавляем TS парсер
      parser: tseslint.parser, 
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettierPlugin
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules, // Правильно: jsx-runtime
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules, // Отключаем конфликтующие правила ESLint
      'prettier/prettier': 'error',
      'react/jsx-no-target-blank': 'off',
      "react/prop-types": "off",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // В TS лучше использовать версию правила от tseslint
      '@typescript-eslint/no-unused-vars': 'warn',
      "@typescript-eslint/no-explicit-any": "off", 
      'no-unused-vars': 'off', // Отключаем стандартное, чтобы не было конфликтов
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
)
