/**
 * webpack配置
 * https://webpack.js.org/configuration/externals/
 * https://webpack.js.org/configuration/resolve/#resolvealias
*/
var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`mily-ui/packages/${key}`] = `mily-ui/lib/${key}`;
});


externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  'mily-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};