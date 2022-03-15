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
      >
        {renderIcon(GOOGLE_COLOR_ICON_NAME, '15px', '15px')}
        <span className="text">Google&nbsp;Sign&nbsp;In</span>
      </BasicButton>
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
