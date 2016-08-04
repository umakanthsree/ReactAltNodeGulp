import React from 'react';
import AppStore from '../stores/AppStore'
import AppActions from '../actions/AppActions';
import TextField from './Textfield'

class Child extends React.Component {
  render() {
    return (
      <div className='alert alert-info'>
        Hello from Child Component
         {this.props.data}

         <TextField  data={this.props.data} maxLength={25} placeholder="name" onChange={this.props.handleChange}  />

         <TextField  data={this.props.data} maxLength={25} placeholder="name" readOnly={true}/>

      </div>
    );
  }
}

export default Child;