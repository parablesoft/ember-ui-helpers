/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-helpers',
  included: function(app){
    // app.import("bower_components/font-awesome/css/font-awesome.css");
    app.import("vendor/assets/sweetalert/dist/sweetalert.css");
    app.import("vendors/assets/sweetalert/dist/sweetalert-dev.js");
    app.import("vendor/assets/stylesheets/fade-in.css");
    app.import("vendor/assets/stylesheets/blank-slate.css");
    app.import("vendor/assets/stylesheets/page-header.css");
    app.import("vendor/assets/stylesheets/generic.css");
    app.import("vendor/assets/sounds/errorNotification.mp3");
  }
};
