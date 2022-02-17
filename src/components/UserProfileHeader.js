import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/main.css';
import '../stylesheets/UserProfileHeader.css';
import ToggleIconButton from './basic/ToggleIconButton';
import ExpandableIconButton from './basic/ExpandableButton';
import BasicButton from './basic/BasicButton';
import defaultImg from '../images/help-rhombus-outline.svg';
import { PLUS_NAME, CHECK_NAME, VERTICAL_DOTS_NAME } from '../Icons';

function UserProfileHeader(props) {
  const {
    imageSrc,
    name,
    infoText,
    numFollowers,
    numFollowing,
    isFollowing,
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
          alt={name}
          width="60px"
          height="60px"
        />
        <div className="name-follow-option">
          <p className="user-name">{name}</p>
          <ToggleIconButton
            toggle={isFollowing}
            initialClassName="not-following"
            initialIcon={PLUS_NAME}
            subsequentClassName="following"
            subsequentIcon={CHECK_NAME}
            iconWidth="20px"
            iconHeight="20px"
          />
          <ExpandableIconButton
            initialIcon={VERTICAL_DOTS_NAME}
            iconWidth="10px"
            iconHeight="20px"
            expand="right"
            direction="up"
            options={
              [
                <button
                  type="button"
                  onClick={reportOptionOnClick}
                >
                  Report
                </button>,
                <button
                  type="button"
                  onClick={shareOptionOnClick}
                >
                  Share
                </button>,
              ]
            }
          />
        </div>
        <p className="user-info">{infoText}</p>
        <BasicButton
          text="Check Compatibility"
          onClick={checkCompatOnClick}
        />
      </div>
      <p className="follow-info">{`${numFollowers} Followers, ${numFollowing} Following`}</p>
    </div>
  );
}

UserProfileHeader.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  infoText: PropTypes.string,
  numFollowers: PropTypes.string,
  numFollowing: PropTypes.string,
  isFollowing: PropTypes.bool,
  reportOptionOnClick: PropTypes.func,
  shareOptionOnClick: PropTypes.func,
  checkCompatOnClick: PropTypes.func,
};

UserProfileHeader.defaultProps = {
  imageSrc: defaultImg,
  name: 'Name L',
  infoText: 'Here\'s some info the user would like to share.',
  numFollowers: '2',
  numFollowing: '3',
  isFollowing: false,
  reportOptionOnClick: () => { window.alert('Report Button Clicked'); },
  shareOptionOnClick: () => { window.alert('Share Button Clicked'); },
  checkCompatOnClick: () => { window.alert('Check Compatibility Button Clicked'); },
};

export default UserProfileHeader;
