module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb/base',
  plugins: [
    'react',
  ],
  env: {
    browser: true,
  },
  rules: {
    'no-console': 0,
    'no-param-reassign': 0,
    'max-len': 0,
    'padded-blocks': 0,
  },
};
