import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import SignInModalContents from '../../modal-contents/SignInModalContents/SignInModalContents';

function SignInModal(props) {
  const {
    onClose,
    formOnSubmit,
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
    />
  );
}

SignInModal.propTypes = {
  onClose: PropTypes.func,
  formOnSubmit: PropTypes.func,
};

SignInModal.defaultProps = {
  onClose: () => {},
  formOnSubmit: () => {},
};

export default SignInModal;
