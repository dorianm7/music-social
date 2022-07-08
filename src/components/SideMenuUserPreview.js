import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/SideMenuUserPreview.css';
import defaultImg from '../images/help-rhombus-outline.svg';

function SideMenuUserPreview(props) {
  const {
    imageSrc,
    username,
    followers,
    following,
  } = props;

  return (
    <div className="side-menu-user-preview">
      <img
        className="picture"
        src={imageSrc}
        alt={`${username}`}
        width="60px"
        height="60px"
      />
      <span className="username">{username}</span>
      <span className="follower-info">{`${followers} Followers, ${following} Following`}</span>
    </div>
  );
}

SideMenuUserPreview.propTypes = {
  imageSrc: PropTypes.string,
  username: PropTypes.string,
  followers: PropTypes.string,
  following: PropTypes.string,
};

SideMenuUserPreview.defaultProps = {
  imageSrc: defaultImg,
  username: 'Username',
  followers: '1',
  following: '1',
};

export default SideMenuUserPreview;
