import Ember from 'ember';
import layout from '../templates/components/address-block';

const {Component} = Ember;

export default Component.extend({
  layout,
  classNames: ["ember-ui-helpers-address-block"],
  addressField: "address",
  address2Field: "address2",
  cityField: "city",
  stateField: "state",
  zipField: "zip",
  item: null,
});
