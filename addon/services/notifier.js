import Ember from 'ember';


const {merge,get,RSVP} = Ember;

export default Ember.Service.extend({
	defaultMessageOptions: {timer: null, playSound: true,title: "Victory!"},
	notifySound: new Audio("/assets/sounds/errorNotification.mp3"),
	info: function(message,{timer,playSound} = {}){
		this.showMessage(message,"info",timer,playSound);
	},
	alert: function(message,{timer,playSound} = {}){
		this.showMessage(message,"error",timer,playSound);
	},
	confirm: function(message){
		return new RSVP.Promise((resolve,reject) =>{
			swal({
				title: "Are you sure?",
				text: message,
				showCancelButton: true,
				confirmButtonText: "Yes, I'm sure.",
				closeOnConfirm: true},
				function(isConfirm){
					resolve(isConfirm);
				});
		});
	},
	stayOrGo: function(message,confirmButtonText,cancelButtonText,{title,timer,playSound}={}){
		return new RSVP.Promise((resolve,reject) =>{
			if(timer===undefined){timer = get(this,"defaultMessageOptions").timer;}
			if(playSound===undefined){playSound=get(this,"defaultMessageOptions").playSound;}
			if(title===undefined){title=get(this,"defaultMessageOptions").title;}

			swal({
						title: title,
						text: message, 
						type: "success",
						confirmButtonText: confirmButtonText,
						cancelButtonText: cancelButtonText,
					  showCancelButton: true, 
						timer: timer},
					 function(isConfirm){
						 if(isConfirm==null){
							 swal.close();
							 // isConfirm = true
						 }
						 resolve(isConfirm);
					 });
					 this.playSound(playSound);
		});
	},
	success: function(message,{timer,playSound}={}){
		this.showMessage(message,'success',timer,playSound);
	},
	showMessage: function(message,messageType,timer,playSound){
		if(timer===undefined){timer = get(this,"defaultMessageOptions").timer;}
		if(playSound===undefined){playSound=get(this,"defaultMessageOptions").playSound;}
		let notify = this.get("notify");

		let swalOptions = {text: message, type: messageType, timer: timer};
		switch(messageType){
			case "info": {
				swalOptions["title"] = "FYI";
				break;
			}
		case "success":{
			swalOptions["title"] = "Victory!";
			break;
		}
	case "error":{
		swalOptions["title"] = "Oops! Something went wrong!";
		break;
	}
		}
		swal(swalOptions);
		this.playSound(playSound);
	},
	playSound(playSound){
		if(playSound){
			let notifySound = this.get("notifySound");
			notifySound.play();
		}
	}
});
