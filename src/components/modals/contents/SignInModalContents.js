import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../../forms/SignInForm';
import BasicButton from '../../basic/BasicButton';
import {
  renderIcon,
  GOOGLE_COLOR_ICON_NAME,
} from '../../../Icons';
import '../../../stylesheets/modal-contents/SignInModalContents.css';

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
        submitSuccess
      />
      <hr />
      <BasicButton
        onClick={googleSignInOnClick}
      >
        {renderIcon(GOOGLE_COLOR_ICON_NAME, '15px', '15px')}
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
  formOnSubmit: () => { console.log('Submit success'); },
  googleSignInOnClick: () => { console.log('Google sign in clicked'); },
  signUpOnClick: () => { console.log('Sign Up button clicked'); },
};

export default SignInModalContents;
