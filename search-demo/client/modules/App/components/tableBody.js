import React, { Component } from 'react';

export default class TableBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody>
        {
          this.props.tableData.map((item, key) => {
            return <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>{item.assignee}</td>
              <td>{item.status}</td>
              <td>{item.priority}</td>
              <td>{item.reporter}</td>
            </tr>
          })
        }
      </tbody>
    )
  }
}
