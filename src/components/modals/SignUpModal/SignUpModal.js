import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import SignUpModalContents from './contents/SignUpModalContents';

function SignUpModal(props) {
  const {
    onClose,
    formOnSubmit,
  } = props;

  return (
    <Modal
      heading="Sign Up"
      contents={(
        <SignUpModalContents
          formOnSubmit={formOnSubmit}
        />
      )}
      closeHandler={onClose}
    />
  );
}

SignUpModal.propTypes = {
  onClose: PropTypes.func,
  formOnSubmit: PropTypes.func,
};

SignUpModal.defaultProps = {
  onClose: () => { window.alert('Close handled'); },
  formOnSubmit: () => { window.alert('Modal form submitted'); },
};

export default SignUpModal;
