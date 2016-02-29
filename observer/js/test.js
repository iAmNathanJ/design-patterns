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
  let subject = Observer.subject();
  t.ok(subject.observers, 'observers ok');
  t.end();
});

test('subject can add observers', t => {
  let subject = Observer.subject();
  let observer = Observer.observer(e => null);
  subject.add(observer);
  t.equal(subject.observers.length, 1, 'observers added');
  t.end();
});

test('cannot set observers directly', t => {
  let subject = Observer.subject();
  t.throws(() => {
    suject.observers = 'nope';
  });
  t.end();
});

test('subject notifies all observers', t => {

  let testVar;
  let testVar2;

  let subject = Observer.subject();
  let observers = [
    Observer.observer(e => {
      testVar = 'hello';
    }),
    Observer.observer(e => {
      testVar2 = 'goodbye';
    })
  ];
  subject.add(observers);
  subject.notify();

  t.equal(testVar, 'hello', 'observer updated');
  t.equal(testVar2, 'goodbye', 'observer updated');
  t.end();
});

test('subject notifies all observers with data', t => {

  let testVar = 'hello';
  let testVar2 = 'hi there';

  let subject = Observer.subject();
  let observers = [
    Observer.observer(e => {
      testVar = e;
    }),
    Observer.observer(e => {
      testVar2 = e;
    })
  ];
  subject.add(observers);
  subject.notify('goodbye');

  t.equal(testVar, 'goodbye', 'observer updated');
  t.equal(testVar2, 'goodbye', 'observer updated');
  t.end();
});

test('subject removes observers', t => {
  let subject = Observer.subject();
  let observer = Observer.observer(e => null);
  subject.add(observer);
  subject.remove(observer);

  t.equal(subject.observers.length, 0, 'observer removed');
  t.end();
});
