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
    signInOnClick,
  } = props;

  return (
    <nav className="main-nav">
      <p className="main-nav-text">{navText}</p>
      <ul className="nav-menu">
        <li key={nanoid()}>
          <a href={featuresHref} className="nav-features">Features</a>
        </li>
        <li key={nanoid()}>
          <a href={contactHref} className="nav-contacts">Contact</a>
        </li>
        <li key={nanoid()} className="nav-sign-in">
          <BasicButton onClick={signInOnClick}>
            Sign&nbsp;In
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
};

MainNav.defaultProps = {
  navText: 'Nav Text',
  featuresHref: '#',
  contactHref: '#',
  signInOnClick: () => { window.alert('Sign In Button Clicked'); },
};

export default MainNav;
