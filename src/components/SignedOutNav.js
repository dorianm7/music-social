import React from 'react';
import propTypes from 'prop-types';
import '../stylesheets/SignedOutNav.css';
import { nanoid } from 'nanoid';
import BasicButton from './basic/BasicButton';

function SignedOutNav(props) {
  const {
    navText,
    featuresHref,
    contactHref,
    logInOnClick,
  } = props;

  return (
    <nav className="signed-out-nav">
      <p className="signed-out-nav-text">{navText}</p>
      <ul className="nav-menu">
        <li key={nanoid()}>
          <a href={featuresHref} className="nav-features">Features</a>
        </li>
        <li key={nanoid()}>
          <a href={contactHref} className="nav-contacts">Contact</a>
        </li>
        <li key={nanoid()} className="nav-log-in">
          <BasicButton text="Log In" onClick={logInOnClick} />
        </li>
      </ul>
    </nav>
  );
}

SignedOutNav.propTypes = {
  navText: propTypes.string,
  featuresHref: propTypes.string,
  contactHref: propTypes.string,
  logInOnClick: propTypes.func,
};

SignedOutNav.defaultProps = {
  navText: 'Nav Text',
  featuresHref: '#',
  contactHref: '#',
  logInOnClick: () => { window.alert('Log In Button Clicked'); },
};

export default SignedOutNav;
