import React, { Component } from 'react';
import PropTypes from 'prop-types';

import typeConfig from '../../config/typeConfig.js';

export default class InputField extends Component {

  constructor(props){
    super(props);
    this.state={
      value: '',
    };
  }

  handleFocus = (length,value, size, index, regEx) => {
    if(!(length <= size)) {
      this.props.handleFocus(index);
    }
    return value.replace(regEx,'').substring(0,size);
  }

  handleHexa = (event) => {
    const { regEx, size, index } = this.props.config;
    const value = event.target.value;
    const tempValue = this.handleFocus(value.length, value, size, index, regEx);
    this.setState({
      value: tempValue,
    })
  }

  handleNumberFocus = (value,min,max,size,index) => {
    
  }

  handleNumber = (event) => {
    const { min, max, index } = this.props.config;
    const value = event.target.value;
    const tempValue = (value >= min && value <= max) ? value : 255;
    this.setState({
      value: tempValue,
    })
  }

  render() {
    const { type } = this.props.config;
    return(
      <input
        className='inputfield'
        ref={
          input => {
            this.inputField = input
          }
        }
        value = {this.state.value}
        onChange = {type === 'number' ? this.handleNumber : this.handleHexa}
        type={type}
      />
    );
  }

}
