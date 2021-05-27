module.exports = {
  env: {
    browser: false,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  globals: {
    document: true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': 0,
    'no-throw-literal': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [0, { allow: 'as-needed' }],
    'jest/expect-expect': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/aria-role': [2, { ignoreNonDOM: true }],
  },
}
