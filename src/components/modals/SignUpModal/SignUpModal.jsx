import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import SignUpModalContents from '../../modal-contents/SignUpModalContents/SignUpModalContents';

function SignUpModal(props) {
  const {
    onClose,
    formOnSubmit,
    open,
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
      open={open}
    />
  );
}

SignUpModal.propTypes = {
  onClose: PropTypes.func,
  formOnSubmit: PropTypes.func,
  open: PropTypes.bool,
};

SignUpModal.defaultProps = {
  onClose: () => {},
  formOnSubmit: () => {},
  open: false,
};

export default SignUpModal;
