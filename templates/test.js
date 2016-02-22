import test from 'ava';
import <%= _.camelCase(pattern) %> from './<%= _.kebabCase(pattern) %>.js';

test.before(t => {
});

test.after(t => {
});

test('<%= pattern %> is a thing', t => {
  t.ok(<%= _.camelCase(pattern) %>);
});
