import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './LibraryInfo.css';

import { Icons } from '../../Icons';

function LibraryInfo(props) {
  const {
    albumsTotal,
    artistsTotal,
    playlistsTotal,
  } = props;

  return (
    <div className="library-info round-corners">
      <ul>
        <li key={nanoid()} className="center-row">
          {Icons.ALBUM}
          Albums:
          <span>{albumsTotal}</span>
        </li>
        <li key={nanoid()} className="center-row">
          {Icons.ARTIST}
          Artists:
          <span>{artistsTotal}</span>
        </li>
        <li key={nanoid()} className="center-row">
          {Icons.PLAYLIST}
          Playlists:
          <span>{playlistsTotal}</span>
        </li>
      </ul>
    </div>
  );
}

LibraryInfo.propTypes = {
  albumsTotal: PropTypes.number,
  artistsTotal: PropTypes.number,
  playlistsTotal: PropTypes.number,
};

LibraryInfo.defaultProps = {
  albumsTotal: '100',
  artistsTotal: '100',
  playlistsTotal: '100',
};

export default LibraryInfo;
