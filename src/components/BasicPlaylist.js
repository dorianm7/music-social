import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/BasicPlaylist.css';

import Select from './Select';
import ListSearch from './ListSearch';

import {
  basicTrackPlaylistToListItems,
  basicTrackCollaborativePlaylistToListItems,
  basicArtistPlaylistToListItems,
} from './utility/PlaylistUtilities';

function BasicPlaylist(props) {
  const {
    type,
    playlistHeader,
    items,
    selectOptions,
    onSelectOptionClick,
    searchVal,
    onSearchStringChange,
    showSearch,
  } = props;
  const [searchString, setSearchString] = useState('');

  let toListItems;
  let typeClassName;
  switch (type) {
    case 'track':
      toListItems = basicTrackPlaylistToListItems;
      typeClassName = '';
      break;
    case 'collaborative':
      toListItems = basicTrackCollaborativePlaylistToListItems;
      typeClassName = ' collaborative';
      break;
    default:
      toListItems = basicArtistPlaylistToListItems;
      typeClassName = ' artist';
      break;
  }

  const onInputChange = (string) => {
    setSearchString(string);
    onSearchStringChange(string);
  };

  return (
    <>
      <div className="basic-playlist">
        <div className="heading">
          {(typeof playlistHeader === 'string')
            ? <h2>{playlistHeader}</h2>
            : playlistHeader}
          <Select
            options={selectOptions}
            optionOnClick={(string) => onSelectOptionClick(string)}
          />
          {showSearch && (
            <ListSearch
              onInputChange={onInputChange}
            />
          )}
        </div>
        <ul className={`list${typeClassName}`}>
          {toListItems(searchString, searchVal, items)}
        </ul>
      </div>
    </>
  );
}

BasicPlaylist.propTypes = {
  type: PropTypes.string,
  playlistHeader: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.object,
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  onSelectOptionClick: PropTypes.func,
  searchVal: PropTypes.string,
  onSearchStringChange: PropTypes.func,
  showSearch: PropTypes.bool,
};

BasicPlaylist.defaultProps = {
  type: 'track',
  playlistHeader: 'Playlist',
  selectOptions: ['Recent', 'Latest'],
  onSelectOptionClick: (option) => { console.log(`${option} clicked`); },
  searchVal: '',
  onSearchStringChange: () => {},
  showSearch: false,
  // Default items holds 2 tracks
  items: {},
};

export default BasicPlaylist;
