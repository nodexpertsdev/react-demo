import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {
        tableData.map((item, key) => {
          return (<tr key={key}>
            <th scope="row">{item.id}</th>
            <td>{item.assignee}</td>
            <td>{item.status}</td>
            <td>{item.priority}</td>
            <td>{item.reporter}</td>
          </tr>);
        })
      }
    </tbody>
  );
};

TableBody.propTypes = {
  tableData: PropTypes.array.isRequired,
};

export default TableBody;
