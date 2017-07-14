import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHead from './tableHead.js';
import TableBody from './tableBody.js';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      headings: ['Id', 'Assignee', 'Status', 'Priority', 'Reporter'],
    };
  }

  render() {
    return (
      <table className="table">
        <TableHead heading={this.state.headings} />
        <TableBody tableData={this.props.tableData} />
      </table>
    );
  }
}

Table.propTypes = {
  tableData: PropTypes.array.isRequired,
};
