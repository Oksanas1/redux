import React from 'react';
import PropTypes from 'prop-types'

const Options = ({ title, options, moveOption }) => (
  <div className="options">
    <div className="options__title">{title}</div>
    <ul className="options__list">
      {options.map(({id, name}) => (
        <li key={id}><button className="options__list-item" onClick={() => moveOption(id)}>{name}</button></li>
      ))}
    </ul>
  </div>
);

Options.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  moveOption: PropTypes.func.isRequired,
 }

export default Options;