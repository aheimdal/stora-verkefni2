module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  rules: {
    indent: ['error', 2],
    curly: ['error', 'multi-line'],
    'brace-style': ['error'],
    'class-methods-use-this': 0
  }
};
