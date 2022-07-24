import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './SignUpForm.css';

import PercentGauge from '../../basic/PercentGauge/PercentGauge';
import TextInput from '../../TextInput/TextInput';
import ToggleIconButton from '../../basic/ToggleIconButton/ToggleIconButton';

import {
  OPEN_EYE_NAME,
  CLOSED_EYE_NAME,
} from '../../../Icons';
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
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <label>
          <div className="label-bar">
            <span className="label-text">Email</span>
          </div>
          <TextInput
            type="email"
            name="email"
            onChange={handleEmailChange}
            requirementTexts={['Enter a valid email address']}
            requirementValidities={emailValidities}
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
          <TextInput
            type={passwordInputType}
            name="password"
            onChange={handlePasswordChange}
            requirementTexts={[
              'Must be at least 10 characters',
              'Must include 1 number',
              'Must include 1 special character',
            ]}
            requirementValidities={passwordValidities}
            required
          />
        </label>
        {showConfirmPasswordInput && (
          <label>
            <div className="label-bar">
              <span className="label-text">Confirm Password</span>
              <ToggleIconButton
                toggle={showConfirmPassword}
                initialIcon={CLOSED_EYE_NAME}
                subsequentIcon={OPEN_EYE_NAME}
                iconWidth="15px"
                iconHeight="15px"
                initialOnClick={handleConfirmPasswordToggleIcon}
                subsequentOnClick={handleConfirmPasswordToggleIcon}
                initialTransparent
                subsequentTransparent
              />
            </div>
            <TextInput
              type={confirmPasswordInputType}
              onChange={handleConfirmPassword}
              requirementTexts={['Passwords must match']}
              requirementValidities={[passwordMatches]}
              required
            />
          </label>
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
    </div>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  onSubmit: () => {},
};

export default SignUpForm;
