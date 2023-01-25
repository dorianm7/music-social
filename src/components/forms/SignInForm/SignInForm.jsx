import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import './SignInForm.css';

import ToggleIconButton from '../../basic/ToggleIconButton/ToggleIconButton';
import PercentGauge from '../../basic/PercentGauge/PercentGauge';

import { IconNames } from '../../../Icons';

function SignInForm(props) {
  const {
    onSubmit,
  } = props;
  const [hasFocused, setHasFocused] = useState(false);

  useEffect(() => {
    if (!hasFocused) {
      const emailInputEl = document.getElementById('sign-in-form-email-input');
      emailInputEl.focus();
      setHasFocused(true);
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordToggleIcon = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    onSubmit(email, password)
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const passwordInputType = showPassword ? 'text' : 'password';

  return (
    <form
      className="sign-in-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="sign-in-form-email-input">
        Email
      </label>
      <input
        id="sign-in-form-email-input"
        className="full-width-input"
        type="text"
        name="email"
        required
      />
      <label htmlFor="sign-in-form-password-input">
        Password
        <ToggleIconButton
          toggle={showPassword}
          initialIcon={IconNames.CLOSED_EYE}
          initialIconAriaLabel="View password"
          subsequentIcon={IconNames.OPEN_EYE}
          subsequentIconAriaLabel="Obscure password"
          initialOnClick={handlePasswordToggleIcon}
          subsequentOnClick={handlePasswordToggleIcon}
          initialTransparent
          subsequentTransparent
        />
      </label>
      <input
        id="sign-in-form-password-input"
        className="full-width-input"
        type={passwordInputType}
        name="password"
        required
      />
      {!isLoading && (
        <button
          className="sign-in-button basic-button"
          type="submit"
        >
          Sign In
        </button>
      )}
      {isLoading && (
        <PercentGauge
          percentFilled={10}
          size="1rem"
        />
      )}
      {error && (
        <span className="error-message center-text">{error.message}</span>
      )}
    </form>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignInForm.defaultProps = {
  onSubmit: () => {},
};

export default SignInForm;
