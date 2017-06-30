import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../InputField/InputField.js';

export default class CustomField extends Component {

  handleField = (name) => {
    console.log('The value is ',this[name]);
    // this[name]['inputField'].value = this[name]['inputField'].value.replace(/([^0-9A-F]){1}/gi, '').substring(0,2);
  }

  handleFocus = (index) => {
    const { segments } = this.props.config;
    const tempIndex = index < (segments - 1) ? index + 1 : index;
    const name=`field${tempIndex}`;
    this[name].inputField.focus();
  }

  getInputField = (index, regEx, size, type, min, max) => {
    const name=`field${index}`;
    return <InputField
            config={{
              regEx,
              size,
              index,
              min,
              max,
              type,
            }}
            ref={
              input => {
                this[name] = input
              }
            }
            handleFocus={this.handleFocus}
          />;
  }

  renderField = (separator, segments, regEx, size, type, min, max) => {
    const input = [];
    for(let index=0;index<segments;index++) {
      input.push(this.getInputField(index,regEx,size,type, min, max));
      input.push( index<(segments-1) ? <span className='separators'>{separator}</span> : <span> </span> )  ;
    }
    return input;
  }

  render() {
    const classes = `${this.props.customFieldClass}`;
    const { separator, segments, regEx, size, type, min, max } = this.props.config;
    return(
      <div>
        <div className={classes}>
          {this.renderField(separator, segments, regEx, size, type, min, max)}
        </div>
      </div>
    );
  }

}
