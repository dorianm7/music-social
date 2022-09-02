import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import './MusicLibrary.css';

import BasicPlaylist from '../BasicPlaylist/BasicPlaylist';
import ListSearch from '../ListSearch/ListSearch';

// Music Library should hold more than one Basic Playlist
function MusicLibrary(props) {
  const {
    children,
    searchAriaLabel,
  } = props;

  const [searchText, setSearchText] = useState('');

  const updatedChildren = [];
  children.forEach((child, index) => {
    if (child.type.name === 'BasicPlaylist') {
      updatedChildren.push(
        React.cloneElement(child, {
          searchVal: searchText,
          key: index,
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
        ariaLabel={searchAriaLabel}
      />
      {updatedChildren}
    </div>
  );
}

MusicLibrary.propTypes = {
  children: PropTypes.node,
  searchAriaLabel: PropTypes.string,
};

MusicLibrary.defaultProps = {
  children: (
    <>
      <BasicPlaylist />
      <BasicPlaylist />
    </>
  ),
  searchAriaLabel: '',
};

export default MusicLibrary;
