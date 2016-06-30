import Ember from 'ember';

const {Mixin,get,observer} = Ember;
export default Mixin.create({
	didInsertElement(){
		let doNotFocus = get(this,"doNotFocus");
		if(!doNotFocus){
			this.$().focus();
		}
	},
	refocus: observer("value", function(){
		let value = get(this,"value");
		if(value==null){
			this.$().focus();
		}
	}),
});
