import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Comparison.css';
import '../stylesheets/main.css';
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
    songPercent,
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
          <p className="comparison-user-name">{firstUserName}</p>
        </div>
        <div className="comparison-user center-column">
          <img
            src={secondUserImg}
            alt={secondUserName}
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
          />
          <p className="comparison-user-name">{secondUserName}</p>
        </div>
      </div>
      <div className="comparison-summary space-evenly-row">
        <div className="summary-item center-column">
          <p className="summary-title">Artists</p>
          <PercentageGauge
            size={CIRCLE_SIZE}
            percentFilled={artistPercent}
            text={`${artistPercent}%`}
          />
        </div>
        <div className="summary-item center-column">
          <p className="summary-title">Albums</p>
          <PercentageGauge
            size={CIRCLE_SIZE}
            percentFilled={albumPercent}
            text={`${albumPercent}%`}
          />
        </div>
        <div className="summary-item center-column">
          <p className="summary-title">Songs</p>
          <PercentageGauge
            size={CIRCLE_SIZE}
            percentFilled={songPercent}
            text={`${songPercent}%`}
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
  songPercent: PropTypes.string,
};

Comparison.defaultProps = {
  firstUserName: 'User 1',
  firstUserImg: defaultImg,
  secondUserName: 'User 2',
  secondUserImg: defaultImg,
  artistPercent: '50',
  albumPercent: '50',
  songPercent: '50',
};

export default Comparison;
