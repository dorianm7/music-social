import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MainNav.css';
import { nanoid } from 'nanoid';
import { useUserContext } from '../contexts/UserContext';
import BasicButton from './basic/BasicButton';

function MainNav(props) {
  const {
    navText,
    featuresHref,
    contactHref,
    signInOnClick,
    openAppOnClick,
  } = props;

  const user = useUserContext();

  const openAppOrSignInText = user ? 'Open App' : 'Sign In';
  const openAppOrSignInOnClick = user ? openAppOnClick : signInOnClick;

  return (
    <nav className="main-nav">
      <span className="main-nav-text">{navText}</span>
      <ul className="nav-menu">
        <li key={nanoid()}>
          <a href={featuresHref} className="nav-features">Features</a>
        </li>
        <li key={nanoid()}>
          <a href={contactHref} className="nav-contacts">Contact</a>
        </li>
        <li key={nanoid()} className="nav-move-or-sign-in">
          <BasicButton onClick={openAppOrSignInOnClick}>
            {openAppOrSignInText}
          </BasicButton>
        </li>
      </ul>
    </nav>
  );
}

MainNav.propTypes = {
  navText: PropTypes.string,
  featuresHref: PropTypes.string,
  contactHref: PropTypes.string,
  signInOnClick: PropTypes.func,
  openAppOnClick: PropTypes.func,
};

MainNav.defaultProps = {
  navText: 'Nav Text',
  featuresHref: '#',
  contactHref: '#',
  signInOnClick: () => { window.alert('Sign In Button Clicked'); },
  openAppOnClick: () => { window.alert('Open App Button Clicked'); },
};

export default MainNav;
