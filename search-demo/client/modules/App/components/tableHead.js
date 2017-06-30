import React, { Component } from 'react';

export default class TableHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <thead className="thead-inverse">
        <tr>
          {
            this.props.heading.map((item, key) => {
              return <th key={key}>{item}</th>
            })
          }
        </tr>
      </thead>
    )
  }
}
