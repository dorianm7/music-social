import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserPreview.css';
import ToggleIconButton from './basic/ToggleIconButton';
import plusIcon from '../images/plus.svg';
import checkIcon from '../images/check.svg';
import defaultImg from '../images/help-rhombus-outline.svg';

function UserPreview(props) {
  const {
    imgSrc,
    imgAlt,
    name,
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
        <p className="user-name">{name}</p>
        <p className="user-follow-info">
          {`${numFollowers} Followers, ${numFollowing} Following`}
        </p>
      </div>
      <ToggleIconButton
        toggle={isFollowing}
        initialClassName="not-following"
        initialSrc={plusIcon}
        initialAlt="Follow User"
        initialOnClick={followButtonOnClick}
        subsequentClassName="following"
        subsequentSrc={checkIcon}
        subseqentAlt="Unfollow User"
        subsequentOnClick={unfollowButtonOnClick}
      />
    </div>
  );
}

UserPreview.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  numFollowers: PropTypes.string,
  numFollowing: PropTypes.string,
  isFollowing: PropTypes.bool,
  followButtonOnClick: PropTypes.func,
  unfollowButtonOnClick: PropTypes.func,
};

UserPreview.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  name: 'Name L',
  numFollowers: '2',
  numFollowing: '3',
  isFollowing: false,
  followButtonOnClick: () => { window.alert('Follow Button Clicked'); },
  unfollowButtonOnClick: () => { window.alert('Unfollow Button Clicked'); },
};

export default UserPreview;
