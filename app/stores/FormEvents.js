import alt from '../alt';
import AppActions from '../actions/AppActions';

const FormEvents = {
	handleChange(component){
	  	console.log('AppStore saveData', component);
	  	AppActions.saveInputData();
	  }
}

export default FormEvents;
