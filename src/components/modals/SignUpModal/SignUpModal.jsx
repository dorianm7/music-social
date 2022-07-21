import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import SignUpModalContents from '../../modal-contents/SignUpModalContents/SignUpModalContents';

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
  onClose: () => {},
  formOnSubmit: () => {},
};

export default SignUpModal;
