import React from 'react';
import PropTypes from 'prop-types';

import './ListSearch.css';

// onInputChange has a string parameter
function ListSearch(props) {
  const {
    onInputChange,
  } = props;
  return (
    <div className="list-search">
      <label className="text">
        Search
        <input
          type="search"
          onChange={(e) => onInputChange(e.target.value)}
        />
      </label>
    </div>
  );
}

ListSearch.propTypes = {
  onInputChange: PropTypes.func,
};

ListSearch.defaultProps = {
  onInputChange: (value) => value,
};

export default ListSearch;
