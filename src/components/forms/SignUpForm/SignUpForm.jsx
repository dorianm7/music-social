import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SignUpForm.css';

import PercentGauge from '../../basic/PercentGauge/PercentGauge';
import TextInput from '../../TextInput/TextInput';
import ToggleIconButton from '../../basic/ToggleIconButton/ToggleIconButton';

import { IconNames } from '../../../Icons';
import {
  VALID_EMAIL_REGEXP,
  HAS_NUM_REGEXP,
  HAS_SPECIAL_CHAR_REGEXP,
} from '../../../RegExps';

function SignUpForm(props) {
  const {
    onSubmit,
  } = props;
  const [emailValidities, setEmailValidities] = useState([false]);
  const [passwordValidities, setPasswordValidities] = useState([false, false, false]);
  const [password, setPassword] = useState('');
  const [passwordMatches, setPasswordMatches] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const matches = email.match(VALID_EMAIL_REGEXP);

    if (!matches || matches.length > 1) {
      setEmailValidities([false]);
    } else if (matches.length === 1) {
      setEmailValidities([matches[0] === email]);
    } else {
      setEmailValidities([false]);
    }
  };

  const handlePasswordChange = (e) => {
    const validLength = e.target.value.length >= 10;
    const includesNum = HAS_NUM_REGEXP.test(e.target.value);
    const includesSpecialChar = HAS_SPECIAL_CHAR_REGEXP.test(e.target.value);
    setPasswordValidities([validLength, includesNum, includesSpecialChar]);
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value === password) {
      setPasswordMatches(true);
    } else {
      setPasswordMatches(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;

    onSubmit(userEmail, userPassword)
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  const handlePasswordToggleIcon = () => {
    setShowPassword(!showPassword);
  };
  const handleConfirmPasswordToggleIcon = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const showConfirmPasswordInput = !passwordValidities.includes(false);
  const passwordInputType = showPassword ? 'text' : 'password';
  const confirmPasswordInputType = showConfirmPassword ? 'text' : 'password';
  const canSubmit = !emailValidities.includes(false)
    && !passwordValidities.includes(false)
    && passwordMatches;

  return (
    <form
      className="sign-up-form"
      onSubmit={handleSubmit}
    >
      <label htmlFor="sign-up-form-email-input">
        Email
      </label>
      <TextInput
        id="sign-up-form-email-input"
        type="email"
        name="email"
        onChange={handleEmailChange}
        requirementTexts={['Enter a valid email address']}
        requirementValidities={emailValidities}
        required
      />
      <label htmlFor="sign-up-form-password-input">
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
      <TextInput
        id="sign-up-form-password-input"
        type={passwordInputType}
        name="password"
        title="Must be at least 10 characters, include 1 number and 1 special character"
        onChange={handlePasswordChange}
        requirementTexts={[
          'Must be at least 10 characters',
          'Must include 1 number',
          'Must include 1 special character',
        ]}
        requirementValidities={passwordValidities}
        required
      />
      {showConfirmPasswordInput && (
        <>
          <label htmlFor="sign-up-form-confirm-password-input">
            Confirm Password
            <ToggleIconButton
              toggle={showConfirmPassword}
              initialIcon={IconNames.CLOSED_EYE}
              initialIconAriaLabel="View password"
              subsequentIcon={IconNames.OPEN_EYE}
              subsequentIconAriaLabel="Obscure password"
              initialOnClick={handleConfirmPasswordToggleIcon}
              subsequentOnClick={handleConfirmPasswordToggleIcon}
              initialTransparent
              subsequentTransparent
            />
          </label>
          <TextInput
            id="sign-up-form-confirm-password-input"
            type={confirmPasswordInputType}
            onChange={handleConfirmPassword}
            requirementTexts={['Passwords must match']}
            requirementValidities={[passwordMatches]}
            required
          />
        </>
      )}
      {!isLoading && (
        <input
          className="sign-up-button basic-button"
          type="submit"
          value="Sign Up"
          disabled={!canSubmit}
        />
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

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  onSubmit: () => {},
};

export default SignUpForm;
