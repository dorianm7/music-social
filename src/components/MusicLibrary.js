import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/MusicLibrary.css';

import BasicPlaylist from './BasicPlaylist';
import ListSearch from './ListSearch';

function MusicLibrary(props) {
  const {
    children,
  } = props;

  const [searchText, setSearchText] = useState('');

  const updatedChildren = [];
  children.forEach((child) => {
    if (child.type.name === 'BasicPlaylist') {
      updatedChildren.push(
        React.cloneElement(child, {
          searchVal: searchText,
        }),
      );
    } else {
      updatedChildren.push(child);
    }
  });

  return (
    <div className="music-library">
      <ListSearch
        onInputChange={setSearchText}
      />
      {updatedChildren}
    </div>
  );
}

MusicLibrary.propTypes = {
  children: PropTypes.node,
};

MusicLibrary.defaultProps = {
  children: <BasicPlaylist />,
};

export default MusicLibrary;
