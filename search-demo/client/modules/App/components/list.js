import React, { Component } from 'react';

import Search from './search.js';
import Table from './table.js';
import data from './data.json';

import { replaceOperators } from './config.js';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      listData: data.listData
    }
  }

  evaluateQuery = (query) => {
    if(!query) {
      return true;
    }
    let res = query.split(' ');
    let q = '';
    res.map((item, index) => {
      let ch = index % 4;
      switch (ch) {
        case 0:
          q += `data.${item}`;
          break;
        case 1:
          q += replaceOperators(item);
          break;
        case 2:
          q += `"${item}"`;
          break;
        case 3:
          q += replaceOperators(item);
          break;
        default:
          break;
      }
    });
    return q;
  }

  handleSearch = (query) => {
    let q = this.evaluateQuery(query);
    this.setState({
      listData: data.listData.filter(data => {
        return eval(q);
      })
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Search handleSearch={this.handleSearch} />
        </div>
        <div className="row">
          <Table tableData={this.state.listData} />
        </div>
      </div>
    )
  }
}
