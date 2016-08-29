const { test } = require('tap');

const server = require('../server');
const web = require('../web');

// SEE: https://github.com/feross/eslint-config-standard/blob/master/test/basic.js
test('test basic properties of config', function (t) {
  t.strictSame(true, isObject(server.env));
  t.strictSame(true, isObject(server.rules));
  t.strictSame(true, isObject(web.env));
  t.strictSame(true, isObject(web.rules));
  t.end();
});

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
