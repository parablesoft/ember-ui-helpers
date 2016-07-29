import Ember from 'ember';
import layout from '../templates/components/loading-message';


const {Component} = Ember;


export default Component.extend({
	layout: layout,
	message: "Loading ...",
	classNames: ["ember-ui-helpers-loading-message"],
	useFadeIn: true,
	classNameBindings: ["useFadeIn:fade-in"]
});
