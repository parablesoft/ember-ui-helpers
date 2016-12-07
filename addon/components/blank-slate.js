import Ember from 'ember';
import layout from '../templates/components/blank-slate';
import {singularize, pluralize} from 'ember-inflector';

const {on,get,Component,computed,isEmpty} = Ember;
export default Component.extend({
  layout,
  classNames: ["ember-ui-helpers-blank-slate text-center"],
  buttonClass: "btn btn-default"
});
