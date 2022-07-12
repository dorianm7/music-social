import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserPreview.css';
import ToggleIconButton from './basic/ToggleIconButton';
import defaultImg from '../images/help-rhombus-outline.svg';
import { PLUS_NAME, CHECK_NAME } from '../Icons';

function UserPreview(props) {
  const {
    imgSrc,
    imgAlt,
    username,
    numFollowers,
    numFollowing,
    isFollowing,
    followButtonOnClick,
    unfollowButtonOnClick,
  } = props;

  return (
    <div className="user-preview">
      <img
        className="user-picture"
        src={imgSrc}
        alt={imgAlt}
        width="60px"
        height="60px"
      />
      <div className="user-info">
        <span className="username">{username}</span>
        <span className="user-follow-info">
          {`${numFollowers} Followers, ${numFollowing} Following`}
        </span>
      </div>
      <ToggleIconButton
        toggle={isFollowing}
        initialClassName="not-following"
        initialIcon={PLUS_NAME}
        initialOnClick={followButtonOnClick}
        subsequentClassName="following"
        subsequentIcon={CHECK_NAME}
        subsequentOnClick={unfollowButtonOnClick}
      />
    </div>
  );
}

UserPreview.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  username: PropTypes.string,
  numFollowers: PropTypes.string,
  numFollowing: PropTypes.string,
  isFollowing: PropTypes.bool,
  followButtonOnClick: PropTypes.func,
  unfollowButtonOnClick: PropTypes.func,
};

UserPreview.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  username: 'Username',
  numFollowers: '2',
  numFollowing: '3',
  isFollowing: false,
  followButtonOnClick: () => { window.alert('Follow Button Clicked'); },
  unfollowButtonOnClick: () => { window.alert('Unfollow Button Clicked'); },
};

export default UserPreview;
