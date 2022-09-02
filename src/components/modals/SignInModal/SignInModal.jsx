import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import SignInModalContents from '../../modal-contents/SignInModalContents/SignInModalContents';

function SignInModal(props) {
  const {
    onClose,
    formOnSubmit,
    open,
  } = props;

  return (
    <Modal
      heading="Sign In"
      contents={(
        <SignInModalContents
          formOnSubmit={formOnSubmit}
        />
      )}
      closeHandler={onClose}
      open={open}
    />
  );
}

SignInModal.propTypes = {
  onClose: PropTypes.func,
  formOnSubmit: PropTypes.func,
  open: PropTypes.bool,
};

SignInModal.defaultProps = {
  onClose: () => {},
  formOnSubmit: () => {},
  open: false,
};

export default SignInModal;
