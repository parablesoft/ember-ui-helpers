/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-helpers',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
    app.import("vendor/assets/sweetalert/sweetalert.css");
    app.import("vendor/assets/sweetalert/sweetalert-dev.js");
    app.import("vendor/assets/stylesheets/fade-in.css");
    app.import("vendor/assets/stylesheets/blank-slate.css");
    app.import("vendor/assets/stylesheets/page-header.css");
    app.import("vendor/assets/stylesheets/generic.css");
    app.import("vendor/assets/sounds/errorNotification.mp3");
  }
};
