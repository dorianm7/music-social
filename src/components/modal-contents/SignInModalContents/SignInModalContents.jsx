import React from 'react';
import PropTypes from 'prop-types';

import './SignInModalContents.css';

import SignInForm from '../../forms/SignInForm/SignInForm';
import BasicButton from '../../basic/BasicButton/BasicButton';

import {
  renderIcon,
  GOOGLE_COLOR_ICON_NAME,
} from '../../../Icons';

function SignInModalContents(props) {
  const {
    formOnSubmit,
    googleSignInOnClick,
    signUpOnClick,
  } = props;

  return (
    <div className="sign-in-modal-contents">
      <SignInForm
        onSubmit={formOnSubmit}
      />
      <hr />
      <BasicButton
        onClick={googleSignInOnClick}
      >
        {renderIcon(GOOGLE_COLOR_ICON_NAME)}
        <span className="text">Google&nbsp;Sign&nbsp;In</span>
      </BasicButton>
      <span className="move-to-sign-up">
        Dont have an account?&nbsp;
        <button
          type="button"
          className="anchor-like"
          onClick={signUpOnClick}
        >
          Sign Up
        </button>
      </span>
    </div>
  );
}

SignInModalContents.propTypes = {
  formOnSubmit: PropTypes.func,
  googleSignInOnClick: PropTypes.func,
  signUpOnClick: PropTypes.func,
};

SignInModalContents.defaultProps = {
  formOnSubmit: () => {},
  googleSignInOnClick: () => {},
  signUpOnClick: () => {},
};

export default SignInModalContents;
