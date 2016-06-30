import Ember from 'ember';
import layout from '../templates/components/wrapped-input';


const {Component,isPresent,computed} = Ember;
export default Component.extend({
  layout: layout,
	classNames: ["form-group"],
	placeholderText: computed("placeholder","labelText",function(){
		let {placeholder,labelText} = this.getProperties("placeholder","labelText");
		return isPresent(placeholder) ? placeholder : labelText;
	}),
});
