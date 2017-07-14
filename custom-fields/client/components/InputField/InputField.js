import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleFocus = (length, value, size, index, regEx, type) => {
    if (!(length <= size)) {
      this.props.handleFocus(index);
    }
    const tempValue = value.replace(regEx, '').substring(0, size);
    if (type === 'ipv4Field') {
      return tempValue > 255 ? 255 : tempValue;
    }
    return tempValue;
  }

  handleHexa = (event) => {
    const { regEx, size, index, type } = this.props.config;
    const value = event.target.value;
    const tempValue = this.handleFocus(value.length, value, size, index, regEx, type);
    this.setState({
      value: tempValue,
    });
  }

  render() {
    return (
      <input
        className="inputfield"
        ref={
          input => {
            this.inputField = input;
          }
        }
        value={this.state.value}
        onChange={this.handleHexa}
        type="text"
      />
    );
  }

}

InputField.propTypes = {
  config: PropTypes.object.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
