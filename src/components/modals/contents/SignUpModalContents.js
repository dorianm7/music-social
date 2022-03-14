import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../../forms/SignUpForm';
import '../../../stylesheets/SignUpModalContents.css';

function SignUpModalContents(props) {
  const {
    formOnSubmit,
  } = props;

  return (
    <>
      <SignUpForm
        onSubmit={formOnSubmit}
        submitSuccess // TODO remove when SignUpForm backend connected
      />
      <hr />
      <a className="move-to-log-in" href="#placeholder">Move to Log in</a>
    </>
  );
}

SignUpModalContents.propTypes = {
  formOnSubmit: PropTypes.func,
};

SignUpModalContents.defaultProps = {
  formOnSubmit: () => { window.alert('Modal contents submit'); },
};

export default SignUpModalContents;
