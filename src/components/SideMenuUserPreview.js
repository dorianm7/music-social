import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/SideMenuUserPreview.css';
import defaultImg from '../images/help-rhombus-outline.svg';

function SideMenuUserPreview(props) {
  const {
    imageSrc,
    name,
    followers,
    following,
  } = props;

  return (
    <div className="side-menu-user-preview">
      <img
        className="picture"
        src={imageSrc}
        alt={`${name}`}
        width="60px"
        height="60px"
      />
      <span className="user-name">{name}</span>
      <span className="follower-info">{`${followers} Followers, ${following} Following`}</span>
    </div>
  );
}

SideMenuUserPreview.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  followers: PropTypes.string,
  following: PropTypes.string,
};

SideMenuUserPreview.defaultProps = {
  imageSrc: defaultImg,
  name: 'Name L',
  followers: '1',
  following: '1',
};

export default SideMenuUserPreview;
