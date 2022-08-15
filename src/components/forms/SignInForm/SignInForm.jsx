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
              initialIcon={IconNames.CLOSED_EYE}
              subsequentIcon={IconNames.OPEN_EYE}
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
