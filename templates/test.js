'use strict';
const test = require('tape');
const <%= _.camelCase(pattern) %> = require('./<%= _.kebabCase(pattern) %>.js');

test('<%= pattern %> is a thing', t => {
  t.plan(1);
  t.ok(<%= _.camelCase(pattern) %>);
});
