import Ember from "ember";
import Notifyable from 'ember-ui-helpers/mixins/notifyable';

export default Ember.Controller.extend(Notifyable,{
	

	actions:{
		showSuccessMessage(){
			this.successMessage("Success!");
		}
	}
});
