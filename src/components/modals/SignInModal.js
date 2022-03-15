import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import SignInModalContents from './contents/SignInModalContents';

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
  onClose: () => { window.alert('Close handled'); },
  formOnSubmit: () => { window.alert('Modal form submitted'); },
};

export default SignInModal;
