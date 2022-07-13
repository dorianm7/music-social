import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import SideMenuUserPreview from '../SideMenuUserPreview/SideMenuUserPreview';
import BasicButton from '../basic/BasicButton/BasicButton';
import { Icons } from '../../Icons';
import './SideMenu.css';

function SideMenu(props) {
  const {
    viewProfileOnClick,
    signOutOnClick,
  } = props;

  return (
    <div className="side-menu flex-column">
      <SideMenuUserPreview />
      <BasicButton
        className="view-profile"
        onClick={viewProfileOnClick}
      >
        View Profile
      </BasicButton>
      <nav>
        <ul className="flex-column">
          <div className="nav-top">
            <li key={nanoid()} className="center-row">
              <a href="#home">
                {Icons.HOME}
                Home
              </a>
            </li>
            <hr />
            <li key={nanoid()} className="center-row">
              <a href="#followers">
                {Icons.FOLLOWERS}
                Followers
              </a>
            </li>
            <hr />
            <li key={nanoid()} className="center-row">
              <a href="#following">
                {Icons.FOLLOWING}
                Following
              </a>
            </li>
            <hr />
            <li key={nanoid()} className="center-row">
              <a href="#comparisons">
                {Icons.COMPARISONS}
                Comparisons
              </a>
            </li>
          </div>
          <div className="nav-bottom">
            <li key={nanoid()} className="center-row">
              <a href="#settings">
                {Icons.SETTINGS}
                Settings
              </a>
            </li>
            <hr />
            <li key={nanoid()} className="center-row">
              <button
                type="button"
                onClick={signOutOnClick}
              >
                {Icons.LOG_OUT}
                Sign Out
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

SideMenu.propTypes = {
  viewProfileOnClick: PropTypes.func,
  signOutOnClick: PropTypes.func,
};

SideMenu.defaultProps = {
  viewProfileOnClick: () => { window.alert('View Profile Clicked'); },
  signOutOnClick: () => { window.alert('Sign Out Clicked'); },
};

export default SideMenu;
