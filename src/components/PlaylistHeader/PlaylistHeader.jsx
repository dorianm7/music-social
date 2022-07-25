import React from 'react';
import PropTypes from 'prop-types';

import './PlaylistHeader.css';

function renderHeadingElement(headingType, playlistName) {
  let res;
  switch (headingType) {
    case 'h1':
      res = <h1>{playlistName}</h1>;
      break;
    case 'h2':
      res = <h2>{playlistName}</h2>;
      break;
    case 'h3':
      res = <h3>{playlistName}</h3>;
      break;
    case 'h4':
      res = <h4>{playlistName}</h4>;
      break;
    case 'h5':
      res = <h5>{playlistName}</h5>;
      break;
    default:
      res = <h6>{playlistName}</h6>;
      break;
  }
  return res;
}

function getReadableTime(timeMS) {
  const hrs = Math.floor(timeMS / (1000 * 60 * 60));
  const mins = Math.floor((timeMS - (hrs * 1000 * 60 * 60)) / (1000 * 60));
  return `${hrs}hrs ${mins}m`;
}

// Will render running time if totalRunningTime > 0
function PlaylistHeader(props) {
  const {
    headingType,
    playlistName,
    totalItems,
    totalRunningTime,
  } = props;

  return (
    <div className="playlist-header">
      {renderHeadingElement(headingType, playlistName)}
      <span>
        Total:&nbsp;
        {totalItems}
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
  headingType: PropTypes.string,
  playlistName: PropTypes.string,
  totalItems: PropTypes.number,
  totalRunningTime: PropTypes.number,
};

PlaylistHeader.defaultProps = {
  headingType: 'h2',
  playlistName: 'Playlist',
  totalItems: 50,
  totalRunningTime: -1,
};

export default PlaylistHeader;
