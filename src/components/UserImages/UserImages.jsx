import React from 'react';
import PropTypes from 'prop-types';
import './UserImages.css';

import { nanoid } from 'nanoid';
import stc from 'string-to-color';

import PercentGauge from '../basic/PercentGauge/PercentGauge';

// Assumes all props are same length
function UserImages(props) {
  const {
    imgSrcs,
    usernames,
    userIds,
  } = props;
  const users = [];
  for (let i = 0; i < imgSrcs.length; i += 1) {
    users.push(
      <li key={nanoid()} className="user">
        <PercentGauge
          percentFilled="100"
          filledGaugeColor={stc(userIds[i])}
          imageSrc={imgSrcs[i]}
          imageAlt={usernames[i]}
        />
        <span>{usernames[i]}</span>
      </li>,
    );
  }

  const styleClass = imgSrcs.length <= 3 ? ' space-around' : ' margin';

  return (
    <ul className={`user-images${styleClass}`}>
      {users}
    </ul>
  );
}

UserImages.propTypes = {
  imgSrcs: PropTypes.arrayOf(PropTypes.string),
  usernames: PropTypes.arrayOf(PropTypes.string),
  userIds: PropTypes.arrayOf(PropTypes.string),
};

UserImages.defaultProps = {

  imgSrcs: ['https://www.thispersondoesnotexist.com/image'],
  usernames: ['Username'],
  userIds: ['userId'],
};

export default UserImages;
