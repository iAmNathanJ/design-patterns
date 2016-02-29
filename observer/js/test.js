'use strict';
const test = require('tape');
const Observer = require('./observer.js');

test('observer is a thing', t => {
  t.ok(Observer, 'pattern ok');
  t.end();
});

test('observer provides a subject', t => {
  t.ok(Observer.subject, 'subject ok');
  t.end();
});

test('subject has observers', t => {
  let subject = Observer.subject;
  t.ok(subject.observers, 'observers ok');
  t.end();
});

test('subject can add observers', t => {
  let subject = Observer.subject;
  let observer = Observer.observer;
  subject.add(observer(function(e) {
    console.log(e);
  }));
  t.equal(subject.observers.length, 1, 'observers added');
  t.end();
});

test('cannot set observers directly', t => {
  t.throws(() => {
    suject.observers[0] = 'nope';
  });
  t.end();
});
