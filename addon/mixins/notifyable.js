import Ember from 'ember';

const {Mixin,inject,get} = Ember;
const {service} = inject;

export default Mixin.create({
  notifier: service(),
  info(message,{timer,playSound} = {}){
    get(this,"notifier").info(message,{timer: timer, playSound: playSound});
  },
  error(message,{timer,playSound} = {}){
    get(this,"notifier").alert(message,{timer: timer, playSound: playSound});
  },
  success(message,{timer,playSound} = {}){
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
  },
  //Should deprecate all of these soon
  infoMessage(message,{timer,playSound} = {}){
    this.info(message,{timer: timer, playSound: playSound});
  },
  errorMessage(message,{timer,playSound} = {}){
    this.error(message,{timer: timer, playSound: playSound});
  },
  successMessage(message,{timer,playSound} = {}){
    this.success(message,{timer: timer, playSound: playSound});
  },
  showSuccessMessage(message,{timer,playSound} = {}){
    this.success(message,{timer: timer, playSound: playSound});
  },
  showInfoMessage(message,{timer,playSound} = {}){
    this.info(message,{timer: timer, playSound: playSound});
  },
  showErrorMessage(message,{timer,playSound} = {}){
    this.error(message,{timer: timer, playSound: playSound});
  },
});
