(function() {
  function vendorModule() {
    'use strict';

    return { 'default': window['JSONFormatter'] };
  }

  define('json-formatter', [], vendorModule);
})();
