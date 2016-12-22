import Ember from "ember";
import Notifyable from 'ember-ui-helpers/mixins/notifyable';

export default Ember.Controller.extend(Notifyable,{
  person: Ember.computed(function(){
    return Ember.Object.create({
      address: "1234 Anywhere Lane",
      city: "Tampa",
      state: "FL",
      zip: "33601"
    });
  }),
  business: Ember.computed(function(){
    return Ember.Object.create({
      name: "ParableSoft",
      address: "21 Jumpstreet",
      address2: "Suite 0",
      city: "Tampa",
      state: "FL",
      zip: "33601"
    });
  }),
  client: Ember.computed(function(){
    return Ember.Object.create({
      fullName: "Joe Smith",
      street: "1234 Dormany Days Rd.",
      street2: "Shed #2",
      municipality: "Plant City",
      stateOrProvince: "Florida",
      postal: "33565-1234"
    });
  }),
  actions:{
    showSuccessMessage(){
      this.successMessage("Success!");
    }
  }
});
