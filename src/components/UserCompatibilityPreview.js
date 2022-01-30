import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserCompatibilityPreview.css';
import PercentGauge from './basic/PercentGauge';
import defaultImage from '../images/help-rhombus-outline.svg';

function UserCompatibilityPreview(props) {
  const { imageSrc, name, percentCompatible } = props;
  return (
    <div className="user-compatibility-preview">
      <PercentGauge
        size="60px"
        percentFilled={percentCompatible}
        imageSrc={imageSrc}
        imageAlt={`Picture of ${name}`}
      />
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-compatibility">{`${percentCompatible}% Compatible`}</p>
      </div>
    </div>
  );
}

UserCompatibilityPreview.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  percentCompatible: PropTypes.string,
};

UserCompatibilityPreview.defaultProps = {
  imageSrc: defaultImage,
  name: 'Name L',
  percentCompatible: '40',
};

export default UserCompatibilityPreview;
