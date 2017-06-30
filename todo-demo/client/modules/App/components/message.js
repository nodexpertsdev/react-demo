import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Message extends PureComponent {

  render() {
    return (
      <h1>{this.props.message}</h1>
    );
  }

}

Message.propTypes = {
  message: PropTypes.string,
};
