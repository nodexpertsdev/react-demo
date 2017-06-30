import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';

import config from './config.json';
import data from './data.json';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      options: config.fields,
      fields: config.fields,
      ops: config.joinOperators,
      query: [''],
      key: Math.random(),
      value: '',
      validQuery : true
    }
  }

  generateValue = (value) => {
    if(!this.state.value) {
      return value;
    }

    let splitResult = this.state.value.split(' ');
    let updatedValue = '';
    splitResult.map((item, index) => {
      if(index == 0) {
        updatedValue += (index == (splitResult.length - 1)) ? value : item;
      } else if (index == (splitResult.length - 1)) {
        updatedValue += ` ${value}`;
      } else {
        updatedValue += ` ${item}`;
      }
    });
    return updatedValue;
  }

  handleChange = (selected) => {
    if(!selected.length) return;
    let value = this.generateValue(selected[0].label);

    this.setState({
      query: [value],
      // key: Math.random(),
      value
    },() => {
      this.search.getInstance().forceUpdate();
      this.search.getInstance().focus();
      this.onInputChange(value);
    });

    // console.log("Typeahead",this.search)
  }


  splitString = (str) => {
    str = str.replace(/\s\s+/g, ' ');
    if(str == ' ') {
      str = str.trim();
    }
    let splitString = str.split(' ');
    let length = splitString.length
    let res = length % 4;
    if(res == 3 && splitString[splitString.length - 1]) {
      this.setState({ validQuery: true});
    } else {
      this.setState({ validQuery: false});
    }
    return res;
  }

  checkString = (str) => {
    str = str.replace(/\s\s+/g, ' ');
    let splitString = str.split(' ');
    return splitString[splitString.length -1];
  }

  filterBy = (option, text ) => {
    text = this.checkString(text);
    return (
      option.label.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
  }

  getValues = () => {
    let splitResult = this.state.value.split(' ');
    let field = splitResult[splitResult.length - 3];
    return data.values.filter(item => {
      if(item.types.indexOf(field) != -1) return true;
      return false;
    });
  }

  getOperators = () => {
    let splitResult = this.state.value.split(' ');
    let field = splitResult[splitResult.length - 2];
    return config.operators.filter(item => {
      if(item.types.indexOf(field) != -1) return true;
      return false;
    });
  }

  setOptions = (ch) => {
    switch (ch) {
      case 1:
        this.setState({
          options: this.state.fields
        });
        break;
      case 2:
        this.setState({
          options: this.getOperators()
        });
        break;
      case 3:
        this.setState({
          options: this.getValues()
        });
        break;
      case 0:
        this.setState({
          options: this.state.ops
        });
        break;
      default:
        console.log("Inside Default case");
        break;
    }
  }

  onInputChange = (text) => {
    this.setState({
      value: text
    }, () => {
      let res = this.splitString(text);
      this.setOptions(res);
    });
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.value);
  }

  render() {
    return(
      <div>
        <div>
          <p>{this.state.validQuery ? "Valid" : "Not Valid"}</p>
        </div>
        <div className="row">
          <div className="col-lg-11">
            <Typeahead
              onInputChange={this.onInputChange}
              options={this.state.options}
              ref = {input => this.search = input }
              filterBy = {this.filterBy}
              selected = {this.state.query}
              onChange={this.handleChange}
              key={this.state.key}
              placeholder={"Advanced Search"}
            />
          </div>
          <div className="col-lg-1">
            <button onClick={this.handleSearch} className="btn btn-primary">Search!</button>
          </div>
        </div>
      </div>
    );
  }
}
