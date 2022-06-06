import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleIconButton from '../basic/ToggleIconButton';
import {
  CLOSED_EYE_NAME,
  OPEN_EYE_NAME,
} from '../../Icons';
import '../../stylesheets/forms/SignInForm.css';

function SignInForm(props) {
  const {
    onSubmit,
    submitSuccess,
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handlePasswordToggleIcon = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const mockSignIn = (
      userEmail = '',
      userPassword = '',
      successCallback = () => {},
      errorCallback = () => {},
    ) => {
      if (submitSuccess) {
        console.log(`${userEmail} ${userPassword}`); // Just to use arguments
        successCallback();
      } else {
        const submittingError = new Error('Email or password not valid');
        errorCallback(submittingError);
        setError(submittingError);
      }
    };
    mockSignIn(
      email,
      password,
      () => { onSubmit(); },
      () => {},
    );
  };

  const passwordInputType = showPassword ? 'text' : 'password';

  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <label>
          <div className="label-bar">
            <span className="label-text">Email</span>
          </div>
          <input
            className="full-width-input"
            type="text"
            name="email"
            required
          />
        </label>
        <label>
          <div className="label-bar">
            <span className="label-text">Password</span>
            <ToggleIconButton
              toggle={showPassword}
              initialIcon={CLOSED_EYE_NAME}
              subsequentIcon={OPEN_EYE_NAME}
              iconWidth="15px"
              iconHeight="15px"
              initialOnClick={handlePasswordToggleIcon}
              subsequentOnClick={handlePasswordToggleIcon}
              initialTransparent
              subsequentTransparent
            />
          </div>
          <input
            className="full-width-input"
            type={passwordInputType}
            name="password"
            required
          />
        </label>
        <button
          className="sign-in-button basic-button"
          type="submit"
        >
          Sign In
        </button>
        {error && (
          <span className="error-message">{error.message}</span>
        )}
      </form>
    </div>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  submitSuccess: PropTypes.bool,
};

SignInForm.defaultProps = {
  onSubmit: () => { window.alert('Successfully submitted'); },
  submitSuccess: false,
};

export default SignInForm;
