import test from 'ava';
import observer from './observer.js';

test.before(t => {});
test.beforeEach(t => {});
test.afterEach(t => {});
test.after(t => {});

test('observer is a thing', t => {
  t.ok(observer);
});
