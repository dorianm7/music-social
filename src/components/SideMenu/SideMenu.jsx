import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import './SideMenu.css';

import BasicButton from '../basic/BasicButton/BasicButton';
import SideMenuUserPreview from '../SideMenuUserPreview/SideMenuUserPreview';

import defaultImg from '../../images/help-rhombus-outline.svg';

import {
  Icons,
} from '../../Icons';

function SideMenu(props) {
  const {
    imgSrc,
    viewProfileOnClick,
    signOutOnClick,
    userName,
    followers,
    following,
  } = props;

  return (
    <div className="side-menu flex-column">
      <SideMenuUserPreview
        imageSrc={imgSrc}
        username={userName}
        followers={followers}
        following={following}
      />
      <BasicButton
        className="view-profile"
        onClick={viewProfileOnClick}
      >
        View Profile
      </BasicButton>
      <nav>
        <ul className="flex-column nav-top">
          <li key={nanoid()} className="center-row">
            <Link to="/home">
              {Icons.HOME}
              Home
            </Link>
          </li>
          <li key={nanoid()} className="center-row">
            <a href="#followers">
              {Icons.FOLLOWERS}
              Followers
            </a>
          </li>
          <li key={nanoid()} className="center-row">
            <a href="#following">
              {Icons.FOLLOWING}
              Following
            </a>
          </li>
          <li key={nanoid()} className="center-row">
            <a href="#comparisons">
              {Icons.COMPARISONS}
              Comparisons
            </a>
          </li>
        </ul>
        <ul className="flex-column nav-top">
          <li key={nanoid()} className="center-row">
            <Link to="/settings">
              {Icons.SETTINGS}
              Settings
            </Link>
          </li>
          <li key={nanoid()} className="center-row">
            <button
              type="button"
              onClick={signOutOnClick}
            >
              {Icons.LOG_OUT}
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

SideMenu.propTypes = {
  imgSrc: PropTypes.string,
  viewProfileOnClick: PropTypes.func,
  signOutOnClick: PropTypes.func,
  userName: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
};

SideMenu.defaultProps = {
  imgSrc: defaultImg,
  viewProfileOnClick: () => {},
  signOutOnClick: () => {},
  userName: 'Username',
  followers: 4,
  following: 6,
};

export default SideMenu;
