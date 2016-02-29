'use strict';

const Observer = require('./observer.js');

let subject = Observer.subject();
let observer = Observer.observer;


subject.add(observer(e => {
  console.log(e);
}));

subject.notify({
  type: 'basicEvent',
  data: 'abcdefg'
});
