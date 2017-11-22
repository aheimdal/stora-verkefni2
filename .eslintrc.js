module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  rules: {
    'class-methods-use-this': 0,
    'linebreak-style': 0,
    "prefer-destructuring": ["error", {"object": false, "array": false}]
  }
};
