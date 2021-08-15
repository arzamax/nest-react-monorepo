module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    'plugin:import/typescript',
    'prettier'
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-hooks'],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "node": {
        "paths": ["./src"]
      }
    }
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        trailingComma: 'es5',
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100,
      },
    ],

    "no-console": "warn",
    "no-debugger": "warn",
    "no-nested-ternary": "error",
    "arrow-body-style": ["error", "as-needed"],

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    "import/export": 'off',
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ],
    "sort-imports": [
      "warn",
      {
        "ignoreDeclarationSort": true
      }
    ],

    "react/prop-types": "off",

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
