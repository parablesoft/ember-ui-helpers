import Ember from 'ember';
import layout from '../templates/components/blank-slate';
import {singularize, pluralize} from 'ember-inflector';


const {on,get,Component,computed,isEmpty} = Ember;


export default Component.extend({
	layout: layout,
	classNames: ["ember-ui-helpers-blank-slate text-center"],
	resources: computed("resource",function(){
		return pluralize(get(this,"resource"));
	}),
	buttonClass: "btn btn-default"
});
