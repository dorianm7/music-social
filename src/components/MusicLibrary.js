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
    playlists,
  } = props;

  const [searchText, setSearchText] = useState('');

  return (
    <div className="music-library">
      <BasicPlaylist
        playlistHeader={(
          renderPlaylistHeader(
            playlistsHeadingType,
            'Artists',
            playlists[0].total,
            -1, // Default Value
          )
        )}
        items={playlists[0].items}
        onSearchStringChange={setSearchText}
        showSearch
      />
      <BasicPlaylist
        playlistHeader={(
          renderPlaylistHeader(
            playlistsHeadingType,
            'Albums',
            playlists[1].total,
            -1, // Default Value
          )
        )}
        items={playlists[1].items}
        searchVal={searchText}
      />
      <BasicPlaylist
        playlistHeader={(
          renderPlaylistHeader(
            playlistsHeadingType,
            'Songs',
            playlists[2].total,
            -1, // Default Value
          )
        )}
        items={playlists[2].items}
        searchVal={searchText}
      />
    </div>
  );
}

MusicLibrary.propTypes = {
  playlistsHeadingType: PropTypes.string,
  playlists: PropTypes.arrayOf(PropTypes.shape({
    __comment: PropTypes.string,
    href: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    limit: PropTypes.number,
    next: PropTypes.string,
    offset: PropTypes.number,
    previous: PropTypes.string,
    total: PropTypes.number,
  })),
};

MusicLibrary.defaultProps = {
  playlistsHeadingType: 'h2',
  playlists:
  [
    playlist,
    playlist,
    playlist,
  ],
};

export default MusicLibrary;
