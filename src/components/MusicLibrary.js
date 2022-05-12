import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/MusicLibrary.css';

import BasicPlaylist from './BasicPlaylist';
import playlist from '../local_data/Playlist_0.json';

// playlistsItems length should match the number of playlists
function MusicLibrary(props) {
  const { playlistsItems } = props;

  const [searchText, setSearchText] = useState('');

  return (
    <div className="music-library">
      <BasicPlaylist
        playlistHeader={<h3>Artists</h3>}
        items={playlistsItems[0]}
        onSearchStringChange={setSearchText}
        showSearch
      />
      <BasicPlaylist
        playlistHeader={<h3>Albums</h3>}
        items={playlistsItems[1]}
        searchVal={searchText}
      />
      <BasicPlaylist
        playlistHeader={<h3>Songs</h3>}
        items={playlistsItems[2]}
        searchVal={searchText}
      />
    </div>
  );
}

MusicLibrary.propTypes = {
  playlistsItems: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
};

MusicLibrary.defaultProps = {
  playlistsItems:
  [
    [
      playlist.items[0],
      playlist.items[1],
    ],
    [
      playlist.items[0],
      playlist.items[1],
    ],
    [
      playlist.items[0],
      playlist.items[1],
    ],
  ],
};

export default MusicLibrary;
