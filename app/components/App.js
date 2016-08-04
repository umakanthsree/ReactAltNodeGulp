import React from 'react';
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions';
import FormEvents from '../stores/FormEvents';
import Child from './Child';

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = AppStore.getState();
	    this.onChange = this.onChange.bind(this);
	  }

	   componentWillMount() {
	  	AppStore.listen(this.onChange);
	    AppActions.getData();
	  }

	  componentDidMount() {
	    AppStore.listen(this.onChange);
	    AppActions.getData();
	  }

	  componentWillUnmount() {
	    AppStore.unlisten(this.onChange);
	  }

	  onChange(state) {
	  	console.log('AppStore onChange',state);
	    this.setState(state);
	  }

    handleChange() {
	  	console.log('render');
	}

  render() {
  	return (
      <div className='alert alert-info'>
        Hello from Home Component
        {this.state.names.name}
        <Child data={this.state.names.name} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
