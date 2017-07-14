import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import config from './config.json';
import data from './data.json';
import './searchStyle.css';

export default class NewSearch extends Component {
  constructor() {
    super();
    this.state = {
      options: config.fields,
      fields: config.fields,
      ops: config.joinOperators,
      value: '',
      validQuery : true
    }
  }

  generateValue = (value) => {
    if(!this.state.value) {
      return `${value} `;
    }

    let splitResult = this.state.value.split(' ');
    let updatedValue = '';
    splitResult.map((item, index) => {
      if(index == 0) {
        updatedValue += (index == (splitResult.length - 1)) ? `${value} ` : `${item} `;
      } else if (index == (splitResult.length - 1)) {
        updatedValue += `${value} `;
      } else {
        updatedValue += `${item} `;
      }
    });
    return updatedValue;
  }

  splitString = (str) => {
    str = str.replace(/\s\s+/g, ' ');
    let splitString = str.split(' ');
    let length = splitString.length
    let res = length % 4;
    if((res == 3 && splitString[splitString.length - 1]) || (res == 0 && !splitString[splitString.length - 1])) {
      this.setState({ validQuery: true});
    } else {
      this.setState({ validQuery: false});
    }
    return { mod: res, search: splitString[splitString.length - 1] };
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

  filterOptions = (options, search) => {
    return options.filter(option => option.label.toLowerCase().indexOf(search.toLowerCase()) !== -1 );
  }

  setOptions = ({ mod, search }) => {
    switch (mod) {
      case 1:
        this.setState({
          options: this.filterOptions(this.state.fields, search)
        });
        break;
      case 2:
        this.setState({
          options: this.filterOptions(this.getOperators(), search)
        });
        break;
      case 3:
        this.setState({
          options: this.filterOptions(this.getValues(), search)
        });
        break;
      case 0:
        this.setState({
          options: this.filterOptions(this.state.ops, search)
        });
        break;
      default:
        console.log("Inside Default case");
        break;
    }
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.value);
  }

  renderSuggestion = suggestion => suggestion.label

  onSuggestionsFetchRequested = ({value}) => {};

  onSuggestionsClearRequested = () => {}

  getSuggestionValue = suggestion => suggestion.label;

  afterInputChange = data => {
    if (data.method == 'click') {
      this.suggest.setState({
        isCollapsed: false
      });
    }
    let res = this.splitString(this.state.value);
    this.setOptions(res);
  }

  inputChange = (e, data) => {
    console.log("Input Change", this.suggest);
    let value;
    if (data.method == 'type') {
      value = data.newValue;
    } else {
      value = this.generateValue(data.newValue);
    }
    value = value.replace(/\s\s+/g, ' ');
    value = value.trimLeft();
    this.setState({ value }, () => this.afterInputChange(data));
  }

  onSuggestionSelected = (e , data) => {}

  theme = () => {
    return {
      container:                'react-autosuggest__container',
      containerOpen:            'react-autosuggest__container--open',
      input:                    'react-autosuggest__input',
      inputOpen:                'react-autosuggest__input--open',
      inputFocused:             'react-autosuggest__input--focused',
      suggestionsContainer:     'react-autosuggest__suggestions-container',
      suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
      suggestionsList:          'react-autosuggest__suggestions-list',
      suggestion:               'react-autosuggest__suggestion',
      suggestionFirst:          'react-autosuggest__suggestion--first',
      suggestionHighlighted:    'react-autosuggest__suggestion--highlighted',
      sectionContainer:         'react-autosuggest__section-container',
      sectionContainerFirst:    'react-autosuggest__section-container--first',
      sectionTitle:             'react-autosuggest__section-title'
    }
  }

  inputKeyDown = () => {
    // console.log("inside keydown", this.suggest.autowhatever.input.selectionStart , this.suggest.autowhatever.input.selectionEnd, this.suggest.autowhatever.input.selectionDirection);
  }

  shouldRenderSuggestions = (data, data1) => true;

  render() {
    const inputProps = {
      value: this.state.value,
      onChange: this.inputChange,
      onKeyUp: this.inputKeyDown,
      ref:() => input = this.searchInput = input,
      className: 'form-control'
    };
    return(
      <div>
        <div>
          {!this.state.validQuery ? <p className="text-danger" style={{height: 20+'px'}}><b>Search String is not Valid</b></p> : <p style={{height: 20+'px'}}></p>}
        </div>
        <div className="row">
          <div className="col-lg-11">
            <Autosuggest
              ref={input => this.suggest = input}
              theme={this.theme()}
              highlightFirstSuggestion={true}
              suggestions={this.state.options}
              inputProps={inputProps}
              renderSuggestion={this.renderSuggestion}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              onSuggestionSelected={this.onSuggestionSelected}
              shouldRenderSuggestions={this.shouldRenderSuggestions}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
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
