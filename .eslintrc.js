module.exports = {
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
    "prettier"
  ],
  "globals": {
    "React": "writable",
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "ignorePatterns": [
    'node_modules/', 
    '.cache/', 
    '.cache/', 
    'public/'
  ],
  "rules": {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/jsx-curly-newline": ["off"],
    "react/jsx-one-expression-per-line": ["off"],
    "react/prop-types": ["off"]
  }
};
