import React from 'react';
import PropTypes from 'prop-types';
import './UserProfileHeader.css';
import ToggleIconButton from '../basic/ToggleIconButton/ToggleIconButton';
import BasicButton from '../basic/BasicButton/BasicButton';
import UserProfileOptions from '../UserProfileOptions/UserProfileOptions';
import defaultImg from '../../images/help-rhombus-outline.svg';
import { PLUS_NAME, CHECK_NAME } from '../../Icons';

function UserProfileHeader(props) {
  const {
    imageSrc,
    username,
    userLink,
    infoText,
    numFollowers,
    numFollowing,
    isFollowing,
    followButtonOnClick,
    unfollowButtonOnClick,
    reportOptionOnClick,
    shareOptionOnClick,
    checkCompatOnClick,
  } = props;

  return (
    <div className="user-profile-header">
      <div className="profile-main">
        <img
          className="user-picture"
          src={imageSrc}
          alt={username}
          width="80px"
          height="80px"
        />
        <div className="username-follow-option">
          <span className="username">{username}</span>
          <ToggleIconButton
            toggle={isFollowing}
            initialClassName="not-following"
            initialIcon={PLUS_NAME}
            initialOnClick={followButtonOnClick}
            subsequentClassName="following"
            subsequentIcon={CHECK_NAME}
            subsequentOnClick={unfollowButtonOnClick}
            iconWidth="20px"
            iconHeight="20px"
          />
          <UserProfileOptions
            userLink={userLink}
            shareOptionOnClick={shareOptionOnClick}
            reportOptionOnClick={reportOptionOnClick}
          />
        </div>
        <span className="user-info">{infoText}</span>
        <BasicButton onClick={checkCompatOnClick}>
          Check&nbsp;Compatibility
        </BasicButton>
      </div>
      <span className="follow-info">{`${numFollowers} Followers, ${numFollowing} Following`}</span>
    </div>
  );
}

UserProfileHeader.propTypes = {
  imageSrc: PropTypes.string,
  username: PropTypes.string,
  userLink: PropTypes.string,
  infoText: PropTypes.string,
  numFollowers: PropTypes.string,
  numFollowing: PropTypes.string,
  isFollowing: PropTypes.bool,
  followButtonOnClick: PropTypes.func,
  unfollowButtonOnClick: PropTypes.func,
  reportOptionOnClick: PropTypes.func,
  shareOptionOnClick: PropTypes.func,
  checkCompatOnClick: PropTypes.func,
};

UserProfileHeader.defaultProps = {
  imageSrc: defaultImg,
  username: 'Username',
  userLink: 'https://pretend-link.com/users/user',
  infoText: 'Here\'s some info the user would like to share.',
  numFollowers: '2',
  numFollowing: '3',
  isFollowing: false,
  followButtonOnClick: () => { window.alert('Follow Button Clicked'); },
  unfollowButtonOnClick: () => { window.alert('Unfollow Button Clicked'); },
  reportOptionOnClick: () => { window.alert('Report Button Clicked'); },
  shareOptionOnClick: () => { window.alert('Share Button Clicked'); },
  checkCompatOnClick: () => { window.alert('Check Compatibility Button Clicked'); },
};

export default UserProfileHeader;
