import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserPreview.css';
import IconButton from './basic/IconButton';
import plusIcon from '../images/plus.svg';
import checkIcon from '../images/check.svg';
import defaultImg from '../images/help-rhombus-outline.svg';

function renderIconButton(isFollowing, addButtonOnClick, removeButtonOnClick) {
  const iconSrc = isFollowing ? checkIcon : plusIcon;
  const onClick = isFollowing ? removeButtonOnClick : addButtonOnClick;
  const followingClass = isFollowing ? 'following' : 'initial';

  return (
    <IconButton
      className={followingClass}
      src={iconSrc}
      rounded="all"
      iconWidth="25px"
      iconHeight="25px"
      onClick={onClick}
    />
  );
}

function UserPreview(props) {
  const {
    imgSrc,
    imgAlt,
    name,
    numFollowers,
    numFollowing,
    isFollowing,
    addButtonOnClick,
    removeButtonOnClick,
  } = props;

  const iconButton = renderIconButton(isFollowing, addButtonOnClick, removeButtonOnClick);

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
      {iconButton}
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
  addButtonOnClick: PropTypes.func,
  removeButtonOnClick: PropTypes.func,
};

UserPreview.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  name: 'Name L',
  numFollowers: '2',
  numFollowing: '3',
  isFollowing: false,
  addButtonOnClick: () => { window.alert('Add Button Clicked'); },
  removeButtonOnClick: () => { window.alert('Remove Button Clicked'); },
};

export default UserPreview;
