import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import SignUpForm from '../forms/SignUpForm';
import '../../stylesheets/SignUpModal.css';

function SignUpModal(props) {
  const {
    closeHandler,
    onSubmitSuccess,
  } = props;

  // TODO use signUp from auth functions
  const handleSubmit = (email, password) => {
    // signUp: imported from auth functions.
    // successSubmit: used to move to next step in sign up process
    // errorSubmit: used to show feedback error has happened
    // signUp(email, password,
    //  () => {
    //  successSubmit();
    //  onSubmitSuccess();},
    //  errorSubmit)
    console.log(`Submit clicked: ${email} ${password}`);
    onSubmitSuccess();
  };

  const contents = (
    <>
      <SignUpForm onSubmit={handleSubmit} />
      <hr />
      <a className="move-to-log-in" href="#placeholder">Move to Log in</a>
    </>
  );

  return (
    <Modal
      heading="Sign Up"
      contents={contents}
      closeHandler={closeHandler}
    />
  );
}

SignUpModal.propTypes = {
  closeHandler: PropTypes.func,
  onSubmitSuccess: PropTypes.func,
};

SignUpModal.defaultProps = {
  closeHandler: () => { window.alert('Close handled'); },
  onSubmitSuccess: () => { window.alert('Submit success. Move to next step'); },
};

export default SignUpModal;
