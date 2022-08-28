/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './ListSearch.css';

// onInputChange has a string parameter
function ListSearch(props) {
  const {
    onInputChange,
    ariaLabel,
  } = props;

  const inputAriaProps = {
    'aria-label': ariaLabel,
  };

  const ariaProps = ariaLabel ? inputAriaProps : {};

  return (
    <div className="list-search">
      <label className="text">
        Search
        <input
          type="search"
          onChange={(e) => onInputChange(e.target.value)}
          {...ariaProps}
        />
      </label>
    </div>
  );
}

ListSearch.propTypes = {
  onInputChange: PropTypes.func,
  ariaLabel: PropTypes.string,
};

ListSearch.defaultProps = {
  onInputChange: (value) => value,
  ariaLabel: '',
};

export default ListSearch;
