import Ember from 'ember';

const {Mixin,inject,get} = Ember;
const {service} = inject;

export default Mixin.create({
	notifier: service(),
	infoMessage(message,{timer,playSound} = {}){
		get(this,"notifier").info(message,{timer: timer, playSound: playSound});
	},
	showErrorMessage(message,{timer,playSound} = {}){
		get(this,"notifier").alert(message,{timer: timer, playSound: playSound});
	},
	successMessage(message,{timer,playSound} = {}){
		get(this,"notifier").success(message,{timer: timer, playSound: playSound});
	},
	confirm(message){
		return get(this,"notifier").confirm(message).then((isConfirmed)=>{
			return isConfirmed;
		});
	},
	stayOrGo(message,confirmText,cancelText,routeToGo,{title,timer,playSound} = {}){
		get(this,"notifier").stayOrGo(message,confirmText,cancelText,{title:title,timer:timer,playSound:playSound}).then((isConfirmed)=>{
			if(isConfirmed){
				this.transitionToRoute(routeToGo);
			}
		});
	}
});
