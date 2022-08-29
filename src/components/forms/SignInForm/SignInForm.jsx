import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';

import './SignInForm.css';

import ToggleIconButton from '../../basic/ToggleIconButton/ToggleIconButton';

import { IconNames } from '../../../Icons';

function SignInForm(props) {
  const {
    onSubmit,
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

    onSubmit(email, password)
      .catch((err) => {
        setError(err);
      });
  };

  const passwordInputType = showPassword ? 'text' : 'password';

  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
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
        <button
          className="sign-in-button basic-button"
          type="submit"
        >
          Sign In
        </button>
        {error && (
          <span className="error-message center-text">{error.message}</span>
        )}
      </form>
    </div>
  );
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignInForm.defaultProps = {
  onSubmit: () => {},
};

export default SignInForm;
