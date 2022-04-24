import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/ListSearch.css';

// onInputChange has a string parameter
function ListSearch(props) {
  const {
    onInputChange,
  } = props;
  return (
    <div className="list-search">
      <span className="text">Search</span>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
}

ListSearch.propTypes = {
  onInputChange: PropTypes.func,
};

ListSearch.defaultProps = {
  onInputChange: (value) => console.log(`Input change: ${value}`),
};

export default ListSearch;
