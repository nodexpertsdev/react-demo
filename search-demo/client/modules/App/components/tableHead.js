import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ heading }) => {
  return (
    <thead className="thead-inverse">
      <tr>
        {
          heading.map((item, key) => {
            return <th key={key}>{item}</th>;
          })
        }
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  heading: PropTypes.array.isRequired,
};

export default TableHead;
