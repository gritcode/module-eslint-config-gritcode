module.exports = {
  extends: 'airbnb/base',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'padded-blocks': 0,
    'global-require': 0,
    'no-confusing-arrow': 0,
    'no-underscore-dangle': 0,
    'no-prototype-builtins': 0,
  },
};
