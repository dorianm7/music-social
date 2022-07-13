import React from 'react';
import PropTypes from 'prop-types';

import './Comparison.css';

import PercentageGauge from '../basic/PercentGauge/PercentGauge';
import defaultImg from '../../images/help-rhombus-outline.svg';

function Comparison(props) {
  const {
    firstUsername,
    firstUserImg,
    secondUsername,
    secondUserImg,
    artistPercent,
    albumPercent,
    playlistPercent,
  } = props;
  const CIRCLE_SIZE = '90px';

  return (
    <div className="comparison">
      <div className="comparison-users space-evenly-row">
        <div className="comparison-user center-column">
          <img
            src={firstUserImg}
            alt={firstUsername}
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
          />
          <span className="comparison-username">{firstUsername}</span>
        </div>
        <div className="comparison-user center-column">
          <img
            src={secondUserImg}
            alt={secondUsername}
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
          />
          <span className="comparison-username">{secondUsername}</span>
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
  firstUsername: PropTypes.string,
  firstUserImg: PropTypes.string,
  secondUsername: PropTypes.string,
  secondUserImg: PropTypes.string,
  artistPercent: PropTypes.string,
  albumPercent: PropTypes.string,
  playlistPercent: PropTypes.string,
};

Comparison.defaultProps = {
  firstUsername: 'User1',
  firstUserImg: defaultImg,
  secondUsername: 'User2',
  secondUserImg: defaultImg,
  artistPercent: '50',
  albumPercent: '50',
  playlistPercent: '50',
};

export default Comparison;
