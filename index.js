/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-format-json',
    included: function(app){
        if (typeof app.import !== 'function' && app.app) {
          app = app.app;
        }
        this._super.included(app);
        app.import('vendor/shims/json-formatter.js');
    }
};
