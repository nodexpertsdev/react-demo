import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../InputField/InputField.js';

import config from '../../config/typeConfig.js';

export default class CustomField extends Component {

  getInputField = (index, regEx, size, type) => {
    const name = `field${index}`;
    return (<InputField
      key={`key${name}`}
      config={{
        regEx,
        size,
        index,
        type,
      }}
      ref={
        input => {
          this[name] = input;
        }
      }
      handleFocus={this.handleFocus}
    />);
  }

  handleFocus = (index) => {
    const { type } = this.props;
    const { segments } = config[type];
    const tempIndex = index < (segments - 1) ? index + 1 : index;
    const name = `field${tempIndex}`;
    this[name].inputField.focus();
  }

  renderField = (separator, segments, regEx, size, type) => {
    const input = [];
    for (let index = 0; index < segments; index++) {
      input.push(this.getInputField(index, regEx, size, type));
      input.push(index < (segments - 1) ? <span key={`key${index}`} className="separators">{separator}</span> : <span key={`key${index}`}> </span>);
    }
    return input;
  }

  render() {
    const classes = `${this.props.customFieldClass}`;
    const { type } = this.props;
    const { separator, segments, regEx, size } = config[type];
    return (
      <div>
        <div className={classes}>
          {this.renderField(separator, segments, regEx, size, type)}
        </div>
      </div>
    );
  }

}

CustomField.propTypes = {
  type: PropTypes.string.isRequired,
  customFieldClass: PropTypes.string,
};
