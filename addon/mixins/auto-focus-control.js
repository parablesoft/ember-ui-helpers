import Ember from 'ember';

const {Mixin,get,observer,} = Ember;
export default Mixin.create({
  delay: null,
  didInsertElement(){
    let doNotFocus = get(this,"doNotFocus");
    if(!doNotFocus){
      let delay = get(this,"delay");
      if(delay!=null){
	Ember.run.later(this,function(){
	  this.focusMe();
	},delay);
      }
      else{
	this.focusMe();
      }
    }
  },
  focusMe(){
    this.$().focus();
  },
  refocus: observer("value", function(){
    let value = get(this,"value");
    if(value==null){
      this.$().focus();
    }
  }),
});
