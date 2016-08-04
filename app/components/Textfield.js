/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
// import classNames from 'classnames';

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    // this.onBlur = props.onBlur ? props.onBlur.bind(null, this) : () => {return null;};
    // this.onChange = props.onChange ? props.onChange.bind(null, this) : () => {return null;};
  }

  render() {

    const value = this.props.data;
    const error = this.props.error;
    const readOnly = this.props.readOnly;
    // const classes = classNames('form-control bgp-textfield', { 'has-error': error });
    // const id = this.props.id || this.elementId();
    const maxLength = this.props.maxLength || 250;
    console.log(this.props.onChange);
    return (
      <div>
        <input
          type="text"
          id="name"
          ref="field"
          value={value}
          placeholder={this.props.placeholder}
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
