module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['formatjs', 'jsx-a11y', 'prettier'],
  root: true,
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': 0,
    'arrow-parens': 'off',
    'formatjs/no-offset': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-onchange': 'off',
    'no-console': 1,
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  reportUnusedDisableDirectives: true,
};
