import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/forms/SignUpForm.css';
import TextInput from '../TextInput';
import ToggleIconButton from '../basic/ToggleIconButton';
import { OPEN_EYE_NAME, CLOSED_EYE_NAME } from '../../Icons';

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

  // RFC 5322 Compliant RegExpr
  const regExpr = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/g;

  const handleEmailChange = (e) => {
    const matchArray = e.target.value.match(regExpr);

    if (!matchArray || matchArray.length > 1) {
      setEmailValidities([false]);
    } else if (matchArray.length === 1) {
      const validEmail = matchArray[0] === e.target.value;
      setEmailValidities([validEmail]);
    } else {
      setEmailValidities([false]);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const validLength = e.target.value.length >= 10;
    const includesNum = /[0-9]/.test(e.target.value);
    const includesSpecialChar = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(e.target.value);
    setPasswordValidities([validLength, includesNum, includesSpecialChar]);
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
    onSubmit(e.target.email.value, e.target.password.value);
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
    <form onSubmit={handleSubmit}>
      <label>
        <div className="label-bar">
          <p className="label-text">Email</p>
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
          <p className="label-text">Password</p>
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
            <p className="label-text">Confirm Password</p>
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
      <input
        className="sign-up-button"
        type="submit"
        value="Sign Up"
        disabled={!canSubmit}
      />
    </form>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  onSubmit: () => { window.alert('Submit Handled 1'); },
};

export default SignUpForm;
