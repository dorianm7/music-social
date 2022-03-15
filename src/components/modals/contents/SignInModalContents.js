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
  const { formOnSubmit } = props;
  const googleIcon = renderIcon(GOOGLE_COLOR_ICON_NAME, '15px', '15px');
  const googleSignInButtonContent = (
    <>
      {googleIcon}
      <span className="text">Google&nbsp;Sign&nbsp;In</span>
    </>
  );
  return (
    <>
      <SignInForm
        onSubmit={formOnSubmit}
        submitSuccess
      />
      <hr />
      <BasicButton
        onClick={() => {
          window.alert('Google Button Clicked'); // TODO use Google SignIn function call
        }}
        text={googleSignInButtonContent}
      />
      <span className="move-to-sign-up">
        Dont have an account?&nbsp;
        <a href="#placeholder">Sign Up</a>
      </span>
    </>
  );
}

SignInModalContents.propTypes = {
  formOnSubmit: PropTypes.func,
};

SignInModalContents.defaultProps = {
  formOnSubmit: () => { console.log('Submit success'); },
};

export default SignInModalContents;
