import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import IP4Field from '../../../components/IP4Field/IP4Field.js';
import IP6Field from '../../../components/IP6Field/IP6Field.js';
import MacField from '../../../components/MacField/MacField.js';
import CustomField from '../../../components/CustomField/CustomField.js';

import typeConfig from '../../../config/typeConfig.js';

export default class Message extends PureComponent {

  render() {
    const { macField, ipv6Field, ipv4Field } = typeConfig;
    return(
      <div>
        <h1>{this.props.message}</h1>
        <CustomField customFieldClass={'customField'} config={macField} />
        <CustomField customFieldClass={'customField'} config={ipv6Field} />
        <CustomField customFieldClass={'customField'} config={ipv4Field} />
      </div>
    );
  }
}
//
// <IP4Field customFieldClass={'customField'}/>
// <IP6Field customFieldClass={'customField'}/>
// <MacField customFieldClass={'customField'}/>
