import React from 'react';
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
  const signedInWithEmail = providerId === EmailAuthProvider.PROVIDER_ID;
  const signedInWithGoogle = providerId === GoogleAuthProvider.PROVIDER_ID;
  const showEmailSignIn = !resigningIn || (resigningIn && signedInWithEmail);
  const showGoogleSignIn = !resigningIn || (resigningIn && signedInWithGoogle);

  return (
    <div className="sign-in-modal-contents">
      {showEmailSignIn && <SignInForm onSubmit={formOnSubmit} />}
      {!resigningIn && <hr />}
      {showGoogleSignIn && (
        <BasicButton onClick={googleSignInOnClick}>
          {renderIcon(IconNames.GOOGLE_COLOR_ICON)}
          <span className="text">Google Sign In</span>
        </BasicButton>
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
