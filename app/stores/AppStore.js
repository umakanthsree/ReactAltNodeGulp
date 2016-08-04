import alt from '../alt'
import AppActions from '../actions/AppActions';

class AppStore{
	constructor() {
	 this.bindActions(AppActions);
	 this.names = {};
    }

   onGetDataSucess(data) {
   	console.log('data',data);
   	this.names = data;
   	// this.setState(this.state.set('names', data));
   }

   onGetDataError(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
   }

   onsavePostDataSuccess(data) {
   	console.log('data',data);
   	this.names = data;
   	// this.setState(this.state.set('names', data));
   }

   onsavePostDataError(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
   }
}

export default alt.createStore(AppStore);
