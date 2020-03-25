const pkg = require('./package.json');

module.exports = {
  env: {
    browser: true,
    amd: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint'
};
