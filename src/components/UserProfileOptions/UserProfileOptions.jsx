import React from 'react';
import PropTypes from 'prop-types';

import ExpandableButton from '../basic/ExpandableButton/ExpandableButton';

import {
  VERTICAL_DOTS_NAME,
} from '../../Icons';

function UserProfileOptions(props) {
  const {
    userLink,
    shareOptionOnClick,
    reportOptionOnClick,
  } = props;

  const shareHandler = () => {
    shareOptionOnClick();
    navigator.clipboard.writeText(userLink)
      .then(() => {})
      .catch(() => {
        // TODO Add feedback when fail
      });
  };

  return (
    <ExpandableButton
      initialIcon={VERTICAL_DOTS_NAME}
      iconWidth="15px"
      iconHeight="20px"
      expand="right"
      direction="up"
      options={
        [
          'Report',
          'Share',
        ]
      }
      optionsOnClicks={
        [
          reportOptionOnClick,
          shareHandler,
        ]
      }
    />
  );
}

UserProfileOptions.propTypes = {
  userLink: PropTypes.string,
  reportOptionOnClick: PropTypes.func,
  shareOptionOnClick: PropTypes.func,
};

UserProfileOptions.defaultProps = {
  userLink: 'https://pretend-link.com/users/user',
  reportOptionOnClick: () => {},
  shareOptionOnClick: () => {},
};

export default UserProfileOptions;
