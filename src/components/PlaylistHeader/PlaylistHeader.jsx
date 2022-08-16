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
  const minMs = 1000 * 60;
  const hrMs = minMs * 60;
  const dayMs = hrMs * 24;

  const days = Math.floor(timeMS / dayMs);
  const timeMinusDaysMs = timeMS - (days * dayMs);

  const hrs = Math.floor(timeMinusDaysMs / hrMs);
  const timeMinusDaysHrsMs = timeMinusDaysMs - (hrs * hrMs);

  const mins = Math.floor(timeMinusDaysHrsMs / minMs);

  let timeString = '';
  if (days === 1) {
    timeString += `${days}day`;
  } else if (days > 0) {
    timeString += `${days}days`;
  }
  if (hrs === 1) {
    timeString += ` ${hrs}hr`;
  } else if (hrs > 0) {
    timeString += ` ${hrs}hrs`;
  }
  if (mins > 0) {
    timeString += ` ${mins}m`;
  }

  return timeString.trim();
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
  headingType: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
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
