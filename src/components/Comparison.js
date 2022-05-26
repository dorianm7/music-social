import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Comparison.css';

import PercentageGauge from './basic/PercentGauge';
import defaultImg from '../images/help-rhombus-outline.svg';

function Comparison(props) {
  const {
    firstUserName,
    firstUserImg,
    secondUserName,
    secondUserImg,
    artistPercent,
    albumPercent,
    playlistPercent,
  } = props;
  const CIRCLE_SIZE = '80px';

  return (
    <div className="comparison">
      <div className="comparison-users space-evenly-row">
        <div className="comparison-user center-column">
          <img
            src={firstUserImg}
            alt={firstUserName}
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
          />
          <span className="comparison-user-name">{firstUserName}</span>
        </div>
        <div className="comparison-user center-column">
          <img
            src={secondUserImg}
            alt={secondUserName}
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
          />
          <span className="comparison-user-name">{secondUserName}</span>
        </div>
      </div>
      <div className="comparison-summary space-evenly-row">
        <div className="summary-item center-column">
          <span className="summary-title">Artists</span>
          <PercentageGauge
            size={CIRCLE_SIZE}
            percentFilled={artistPercent}
            text={`${artistPercent}%`}
          />
        </div>
        <div className="summary-item center-column">
          <span className="summary-title">Albums</span>
          <PercentageGauge
            size={CIRCLE_SIZE}
            percentFilled={albumPercent}
            text={`${albumPercent}%`}
          />
        </div>
        <div className="summary-item center-column">
          <span className="summary-title">Playlists</span>
          <PercentageGauge
            size={CIRCLE_SIZE}
            percentFilled={playlistPercent}
            text={`${playlistPercent}%`}
          />
        </div>
      </div>
    </div>
  );
}

Comparison.propTypes = {
  firstUserName: PropTypes.string,
  firstUserImg: PropTypes.string,
  secondUserName: PropTypes.string,
  secondUserImg: PropTypes.string,
  artistPercent: PropTypes.string,
  albumPercent: PropTypes.string,
  playlistPercent: PropTypes.string,
};

Comparison.defaultProps = {
  firstUserName: 'User 1',
  firstUserImg: defaultImg,
  secondUserName: 'User 2',
  secondUserImg: defaultImg,
  artistPercent: '50',
  albumPercent: '50',
  playlistPercent: '50',
};

export default Comparison;
