/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ui-helpers',
	included: function(app){
		app.import("bower_components/font-awesome/css/font-awesome.css");
    app.import("vendor/fade-in.css");
    app.import("vendor/blank-slate.css");
    app.import("vendor/page-header.css");
	}
};
