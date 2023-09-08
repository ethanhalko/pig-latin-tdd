module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true
  },
  plugins: ['jest'],
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  rules: {
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'comma-dangle': [2, 'only-multiline'],
    'no-undef': 0,
    'quote-props': [1, 'as-needed'],
    'no-trailing-spaces': 2,
    'array-bracket-spacing': [2, 'never'],
    'padding-line-between-statements': [1, { blankLine: 'always', prev: '*', next: 'return' }],
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
  }
};
