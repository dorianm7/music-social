import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/MusicLibrary.css';

import BasicPlaylist from './BasicPlaylist';
import PlaylistHeader from './PlaylistHeader';
import playlist from '../local_data/Playlist_0.json';

function renderPlaylistHeader(headingType, playlistName, totalSongs, totalRunningTime) {
  return (
    <PlaylistHeader
      headingType={headingType}
      playlistName={playlistName}
      totalSongs={totalSongs}
      totalRunningTime={totalRunningTime}
    />
  );
}

// playlistsItems length should match the number of playlists
function MusicLibrary(props) {
  const {
    playlistsHeadingType,
    playlistsItems,
  } = props;

  const [searchText, setSearchText] = useState('');

  return (
    <div className="music-library">
      <BasicPlaylist
        playlistHeader={(
          renderPlaylistHeader(playlistsHeadingType, 'Artists', -2, -1)
        )}
        items={playlistsItems[0]}
        onSearchStringChange={setSearchText}
        showSearch
      />
      <BasicPlaylist
        playlistHeader={(
          renderPlaylistHeader(playlistsHeadingType, 'Albums', -2, -1)
        )}
        items={playlistsItems[1]}
        searchVal={searchText}
      />
      <BasicPlaylist
        playlistHeader={(
          renderPlaylistHeader(playlistsHeadingType, 'Songs', -2, -1)
        )}
        items={playlistsItems[2]}
        searchVal={searchText}
      />
    </div>
  );
}

MusicLibrary.propTypes = {
  playlistsHeadingType: PropTypes.string,
  playlistsItems: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
};

MusicLibrary.defaultProps = {
  playlistsHeadingType: 'h2',
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
