import React from 'react';
import PropTypes from 'prop-types';

import './SignUpModalContents.css';

import SignUpForm from '../../forms/SignUpForm/SignUpForm';

function SignUpModalContents(props) {
  const {
    formOnSubmit,
    signInOnClick,
  } = props;

  return (
    <div className="sign-up-modal-contents">
      <SignUpForm
        onSubmit={formOnSubmit}
      />
      <hr />
      <button
        type="button"
        className="anchor-like"
        onClick={signInOnClick}
      >
        Move&nbsp;to&nbsp;Sign&nbsp;in
      </button>
    </div>
  );
}

SignUpModalContents.propTypes = {
  formOnSubmit: PropTypes.func,
  signInOnClick: PropTypes.func,
};

SignUpModalContents.defaultProps = {
  formOnSubmit: () => {},
  signInOnClick: () => {},
};

export default SignUpModalContents;
