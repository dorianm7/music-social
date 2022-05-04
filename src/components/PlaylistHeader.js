import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/PlaylistHeader.css';

function getReadableTime(timeMS) {
  const hrs = Math.floor(Number(timeMS) / (1000 * 60 * 60));
  const mins = Math.floor((timeMS - (hrs * 1000 * 60 * 60)) / (1000 * 60));
  return `${hrs}hrs ${mins}m`;
}

// Will render running time if totalRunningTime > 0
function PlaylistHeader(props) {
  const {
    totalSongs,
    totalRunningTime,
  } = props;

  return (
    <div className="playlist-header">
      <h2>Playlist</h2>
      <span>
        {totalSongs}
        &nbsp;songs
        {(totalRunningTime > 0) && (
          <>
            ;&nbsp;
            {getReadableTime(totalRunningTime)}
          </>
        )}
      </span>
    </div>
  );
}

PlaylistHeader.propTypes = {
  totalSongs: PropTypes.string,
  totalRunningTime: PropTypes.string,
};

PlaylistHeader.defaultProps = {
  totalSongs: '50',
  totalRunningTime: '-1',
};

export default PlaylistHeader;
