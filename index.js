/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-helpers',
  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    var target = (parentAddon || app);
    if(target.parentAddon){
      target = parentAddon;
    }

    target.import("bower_components/sweetalert/dist/sweetalert.css");
    target.import("bower_components/sweetalert/dist/sweetalert-dev.js");
    target.import("vendor/assets/stylesheets/fade-in.css");
    target.import("vendor/assets/stylesheets/blank-slate.css");
    target.import("vendor/assets/stylesheets/page-header.css");
    target.import("vendor/assets/stylesheets/generic.css");
    target.import("vendor/assets/sounds/errorNotification.mp3");
  }
};
