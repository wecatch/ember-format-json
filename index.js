'use strict';

module.exports = {
    name: require('./package').name,
    included: function(app){
        if (typeof app.import !== 'function' && app.app) {
          app = app.app;
        }
        this._super.included(app);
        app.import('vendor/shims/json-formatter.js');
    }
};
