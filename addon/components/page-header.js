import Ember from 'ember';
import layout from '../templates/components/page-header';

const{Component} = Ember;
export default Component.extend({
  layout: layout,
  classNames: ["ember-ui-helpers-page-header"]
});
