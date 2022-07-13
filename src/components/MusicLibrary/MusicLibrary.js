import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './MusicLibrary.css';

import BasicPlaylist from '../BasicPlaylist/BasicPlaylist';
import ListSearch from '../ListSearch/ListSearch';

// Music Library should hold more than one Basic Playlist
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
          key: nanoid(),
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
  children: (
    <>
      <BasicPlaylist />
      <BasicPlaylist />
    </>
  ),
};

export default MusicLibrary;
