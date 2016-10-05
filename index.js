/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-helpers',
	included: function(app){

		this._super.init && this._super.init.apply(this, arguments);

		this.options = this.options || {};
		this.options.babel = this.options.babel || {};
		this.options.babel.optional = this.options.babel.optional || [];

		if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
			this.options.babel.optional.push('es7.decorators');
		}


		app.import("bower_components/font-awesome/css/font-awesome.css");
		app.import("bower_components/sweetalert/dist/sweetalert.css");
		app.import("bower_components/sweetalert/dist/sweetalert-dev.js");
    app.import("vendor/assets/stylesheets/fade-in.css");
    app.import("vendor/assets/stylesheets/blank-slate.css");
    app.import("vendor/assets/stylesheets/page-header.css");
    app.import("vendor/assets/stylesheets/generic.css");
    app.import("vendor/assets/sounds/errorNotification.mp3");
	}
};
