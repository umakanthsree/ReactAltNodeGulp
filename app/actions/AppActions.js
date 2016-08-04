import alt from '../alt'
var jsdom = require("../../node_modules/jsdom");
var window = jsdom.jsdom().defaultView;
var $ = require("jQuery")(window);
import AppSource from './AppSource'
// import $ from '../../node_modules/jquery/dist/jquery';

class AppActions{
	constructor(){
		this.generateActions('getDataSucess', 'getDataError','savePostDataSuccess','savePostDataError')
	}

	getData() {
    $.ajax({ url: 'http://localhost:5050/names', dataType: 'json' })
      .done((data) => {
        this.getDataSucess(data)
      })
      .fail((jqXhr) => {
        this.getDataError(jqXhr)
      });

//  var that = this;
//  var url = 'https://api.github.com/users/umakanthsree';
//  url = "http://localhost:5050/names";
// // this.getDataSucess(['umakanth','swasjdlaseety']);
//       $.ajax({
//         url: url ,
//         dataType: 'json',
//         type: "GET"
//       }).success(function(result){
//          console.log('result',result);
//         that.getDataSucess(result)
//       }).error(function(result){
//         console.log('fail',result);
//         this.getDataError(result)
//       });
  }

  handleChange(input) {
    $.ajax({ 
      url: 'http://localhost:5050/savePost', 
      dataType: 'json',
      type: "POST",
      data:JSON.stringify(input)
    }).done((data) => {
      this.savePostDataSuccess(data)
    }).fail((jqXhr) => {
      this.savePostDataError(jqXhr)
    });
  }

}

export default alt.createActions(AppActions);