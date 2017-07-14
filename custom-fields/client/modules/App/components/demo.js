import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CustomField from '../../../components/CustomField/CustomField.js';

export default class Demo extends PureComponent {

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <label className="h3">MAC Address</label>
        <CustomField customFieldClass={'customField'} type={'macField'} />
        <label className="h3">IPv6 Address</label>
        <CustomField customFieldClass={'customField'} type={'ipv6Field'} />
        <label className="h3">IPv4 Address</label>
        <CustomField customFieldClass={'customField'} type={'ipv4Field'} />
      </div>
    );
  }
}

Demo.propTypes = {
  message: PropTypes.string,
};
