import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  EmailAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

import './SignInModalContents.css';

import SignInForm from '../../forms/SignInForm/SignInForm';
import BasicButton from '../../basic/BasicButton/BasicButton';

import {
  renderIcon,
  IconNames,
} from '../../../Icons';

function SignInModalContents(props) {
  const {
    formOnSubmit,
    googleSignInOnClick,
    signUpOnClick,
    resigningIn,
    providerId,
  } = props;
  const [googleSignInError, setGoogleSignInError] = useState(null);

  const signedInWithEmail = providerId === EmailAuthProvider.PROVIDER_ID;
  const signedInWithGoogle = providerId === GoogleAuthProvider.PROVIDER_ID;
  const showEmailSignIn = !resigningIn || (resigningIn && signedInWithEmail);
  const showGoogleSignIn = !resigningIn || (resigningIn && signedInWithGoogle);
  const showGoogleSignInError = showGoogleSignIn && googleSignInError;

  const googleSignInHandler = () => googleSignInOnClick()
    .catch((err) => setGoogleSignInError(err));

  return (
    <div className="sign-in-modal-contents">
      {showEmailSignIn && <SignInForm onSubmit={formOnSubmit} />}
      {!resigningIn && <hr />}
      {showGoogleSignIn && (
        <BasicButton onClick={googleSignInHandler}>
          {renderIcon(IconNames.GOOGLE_COLOR_ICON)}
          <span className="text">Google Sign In</span>
        </BasicButton>
      )}
      {showGoogleSignInError && (
        <span className="error-message center-text">{googleSignInError.message}</span>
      )}
      {!resigningIn && (
        <span className="move-to-sign-up">
          Dont have an account?
          <button
            type="button"
            className="anchor-like"
            onClick={signUpOnClick}
          >
            Sign Up
          </button>
        </span>
      )}
    </div>
  );
}

SignInModalContents.propTypes = {
  formOnSubmit: PropTypes.func,
  googleSignInOnClick: PropTypes.func,
  signUpOnClick: PropTypes.func,
  resigningIn: PropTypes.bool,
  providerId: PropTypes.string,
};

SignInModalContents.defaultProps = {
  formOnSubmit: () => {},
  googleSignInOnClick: () => {},
  signUpOnClick: () => {},
  resigningIn: false,
  providerId: '',
};

export default SignInModalContents;
