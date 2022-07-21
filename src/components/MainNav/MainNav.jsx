import React from 'react';
import PropTypes from 'prop-types';
import './MainNav.css';
import { nanoid } from 'nanoid';
import BasicButton from '../basic/BasicButton/BasicButton';

function MainNav(props) {
  const {
    navText,
    topHref,
    featuresHref,
    contactHref,
    userSignedIn,
    buttonOnClick,
  } = props;

  const openAppOrSignInText = userSignedIn ? 'Open App' : 'Sign In';

  return (
    <nav className="main-nav">
      <a
        href={topHref}
        className="main-nav-text"
      >
        {navText}
      </a>
      <ul className="nav-menu">
        <li key={nanoid()}>
          <a href={featuresHref} className="nav-features">Features</a>
        </li>
        <li key={nanoid()}>
          <a href={contactHref} className="nav-contacts">Contact</a>
        </li>
        <li key={nanoid()} className="nav-move-or-sign-in">
          <BasicButton onClick={buttonOnClick}>
            {openAppOrSignInText}
          </BasicButton>
        </li>
      </ul>
    </nav>
  );
}

MainNav.propTypes = {
  navText: PropTypes.string,
  topHref: PropTypes.string,
  featuresHref: PropTypes.string,
  contactHref: PropTypes.string,
  userSignedIn: PropTypes.bool,
  buttonOnClick: PropTypes.func,
};

MainNav.defaultProps = {
  navText: 'Nav Text',
  topHref: '#',
  featuresHref: '#',
  contactHref: '#',
  userSignedIn: false,
  buttonOnClick: () => {},
};

export default MainNav;
