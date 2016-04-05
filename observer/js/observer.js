module.exports = (function observer() {

  'use strict';

  let subject = function() {

    let observers = [];

    function add(obj) {
      let allObjs = Array.isArray(obj) ? obj : [obj];
      observers = observers.concat(allObjs);
    }

    function notify(data) {
      observers.forEach(obj => {
        obj.update(data);
      });
    }

    function remove(obj) {
      let index = observers.indexOf(obj);
      observers.splice(index, 1);
    }

    let api = {
      add: add,
      notify: notify,
      remove: remove
    };

    Object.defineProperty(api, 'observers', {
      get: function() {
        return observers;
      }
    });

    return api;

  };

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
