import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserCompatibilityPreview.css';
import PercentGauge from './basic/PercentGauge';
import defaultImage from '../images/help-rhombus-outline.svg';

function UserCompatibilityPreview(props) {
  const { imageSrc, username, percentCompatible } = props;
  return (
    <div className="user-compatibility-preview">
      <PercentGauge
        size="60px"
        percentFilled={percentCompatible}
        imageSrc={imageSrc}
        imageAlt={`Picture of ${username}`}
      />
      <div className="user-info">
        <span className="username">{username}</span>
        <span className="user-compatibility">{`${percentCompatible}% Compatible`}</span>
      </div>
    </div>
  );
}

UserCompatibilityPreview.propTypes = {
  imageSrc: PropTypes.string,
  username: PropTypes.string,
  percentCompatible: PropTypes.string,
};

UserCompatibilityPreview.defaultProps = {
  imageSrc: defaultImage,
  username: 'Username',
  percentCompatible: '40',
};

export default UserCompatibilityPreview;
