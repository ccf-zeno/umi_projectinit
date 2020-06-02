module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'airbnb',
        'prettier', 
        'prettier/react',
    ],
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'strict': 0,
        'no-param-reassign': 0,
        'arrow-body-style': 0,
        'id-length': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'no-underscore-dangle': 0,
        'react/jsx-filename-extension': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'react/no-unused-prop-types': 0,
        'no-plusplus': 0,
        'no-console': 0,
        'no-bitwise': [2, { allow: ['~'] }],
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-for': 0,
        'prefer-destructuring': 0,
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'no-class-assign': 0,
        'react/no-array-index-key': 0,
        'react/no-find-dom-node': 0,
        'linebreak-style': 0,
        'no-unused-expressions': 0,
        "consistent-return":0,
        "global-require":0,
        "react/no-unused-state":0,
        'no-restricted-syntax':0,
    }
  };
  