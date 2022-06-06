import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MainNav.css';
import { nanoid } from 'nanoid';
import BasicButton from './basic/BasicButton';

function MainNav(props) {
  const {
    navText,
    featuresHref,
    contactHref,
    userSignedIn,
    buttonOnClick,
  } = props;

  const openAppOrSignInText = userSignedIn ? 'Open App' : 'Sign In';

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
  featuresHref: PropTypes.string,
  contactHref: PropTypes.string,
  userSignedIn: PropTypes.bool,
  buttonOnClick: PropTypes.func,
};

MainNav.defaultProps = {
  navText: 'Nav Text',
  featuresHref: '#',
  contactHref: '#',
  userSignedIn: false,
  buttonOnClick: () => { window.alert('Button Clicked'); },
};

export default MainNav;
