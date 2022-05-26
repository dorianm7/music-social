import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/BasicPlaylist.css';

import Select from './Select';
import ListSearch from './ListSearch';

import {
  basicTrackPlaylistToListItems,
  basicTrackCollaborativePlaylistToListItems,
  basicArtistPlaylistToListItems,
  basicAlbumPlaylistToListItems,
  basicPlaylistPlaylistToListItems,
} from './utility/PlaylistUtilities';
import localPlaylist from '../local_data/Playlist_0.json';

function BasicPlaylist(props) {
  const {
    type,
    playlistHeader,
    playlist,
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
    case 'album':
      toListItems = basicAlbumPlaylistToListItems;
      typeClassName = ' album';
      break;
    case 'playlist':
      toListItems = basicPlaylistPlaylistToListItems;
      typeClassName = ' playlist';
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
          {toListItems(searchString, searchVal, playlist)}
        </ul>
      </div>
    </>
  );
}

BasicPlaylist.propTypes = {
  type: PropTypes.string,
  playlistHeader: PropTypes.node,
  selectOptions: PropTypes.arrayOf(PropTypes.string),
  onSelectOptionClick: PropTypes.func,
  searchVal: PropTypes.string,
  onSearchStringChange: PropTypes.func,
  showSearch: PropTypes.bool,
  playlist: PropTypes.oneOfType([
    // Track Playlist
    PropTypes.shape({
      __comment: PropTypes.string,
      href: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
      limit: PropTypes.number,
      next: PropTypes.string,
      offset: PropTypes.number,
      previous: PropTypes.string,
      total: PropTypes.number,
    }),
    // Albums List
    PropTypes.shape({
      href: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
      limit: PropTypes.number,
      next: PropTypes.string,
      offset: PropTypes.number,
      previous: PropTypes.string,
      total: PropTypes.number,
    }),
    // Artist List
    PropTypes.shape({
      artists: PropTypes.shape({
        href: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.object),
        limit: PropTypes.number,
        next: PropTypes.string,
        cursors: PropTypes.shape({
          after: PropTypes.string,
        }),
        total: PropTypes.number,
      }),
    }),
    // Playlist List
    PropTypes.shape({
      href: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
      limit: PropTypes.number,
      next: PropTypes.string,
      offset: PropTypes.number,
      previous: PropTypes.string,
      total: PropTypes.number,
    }),
  ]),
};

BasicPlaylist.defaultProps = {
  type: 'track',
  playlistHeader: 'Playlist',
  selectOptions: ['Recent', 'Latest'],
  onSelectOptionClick: (option) => { console.log(`${option} clicked`); },
  searchVal: '',
  onSearchStringChange: () => {},
  showSearch: false,
  playlist: localPlaylist,
};

export default BasicPlaylist;
