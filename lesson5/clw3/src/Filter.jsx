import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filterText, count, onChange }) => (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input type="text" className="filter__input" value={filterText} onChange={(e) => onChange(e.target.value)} />
    </div>
  );

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;