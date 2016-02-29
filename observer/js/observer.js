module.exports = (function observer() {
  'use strict';

  let subject = (function() {

    let observers = [];

    function add(obj) {
      let allObjs = Array.isArray(obj) ? obj : [obj];
      observers = observers.concat(allObjs);
    }

    let api = {
      add: add
    };

    Object.defineProperty(api, 'observers', {
      get: function() {
        return observers;
      }
    });

    return api;

  })();

  let observer = function(cb) {
    return {
      update(e) { cb(e); }
    };
  };

  return {
    subject: subject,
    observer: observer
  };

})();
