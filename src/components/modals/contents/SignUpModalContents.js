import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../../forms/SignUpForm';
import '../../../stylesheets/SignUpModalContents.css';

function SignUpModalContents(props) {
  const {
    formOnSubmit,
    signInOnClick,
  } = props;

  return (
    <>
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
    </>
  );
}

SignUpModalContents.propTypes = {
  formOnSubmit: PropTypes.func,
  signInOnClick: PropTypes.func,
};

SignUpModalContents.defaultProps = {
  formOnSubmit: () => { window.alert('Modal contents submit'); },
  signInOnClick: () => { window.alert('Move to sign in clicked'); },
};

export default SignUpModalContents;
