import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserImages.css';

import stc from 'string-to-color';

import PercentGauge from './basic/PercentGauge';

// Assumes all props are same length
function UserImages(props) {
  const {
    imgSrcs,
    names,
    userIds,
  } = props;
  const users = [];
  for (let i = 0; i < imgSrcs.length; i += 1) {
    users.push(
      <div className="user">
        <PercentGauge
          percentFilled="100"
          filledGaugeColor={stc(userIds[i])}
          imageSrc={imgSrcs[i]}
          imageAlt={names[i]}
        />
        <span>{names[i]}</span>
      </div>,
    );
  }

  const styleClass = imgSrcs.length <= 3 ? ' space-around' : ' margin';

  return (
    <div className={`user-images${styleClass}`}>
      {users}
    </div>
  );
}

UserImages.propTypes = {
  imgSrcs: PropTypes.arrayOf(PropTypes.string),
  names: PropTypes.arrayOf(PropTypes.string),
  userIds: PropTypes.arrayOf(PropTypes.string),
};

UserImages.defaultProps = {

  imgSrcs: ['https://www.thispersondoesnotexist.com/image'],
  names: ['Namey Nameo'],
  userIds: ['userId'],
};

export default UserImages;
