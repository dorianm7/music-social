import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/modal-contents/ConfirmEmailModalContents.css';

import BasicButton from '../../basic/BasicButton';

function ConfirmEmailModalContents(props) {
  const { moveToSignInOnClick } = props;
  return (
    <>
      <p className="confirm-text">
        Please confirm email to recieve updates and sign in to your account.
      </p>
      <BasicButton
        onClick={moveToSignInOnClick}
      >
        Move to sign in
      </BasicButton>
    </>
  );
}

ConfirmEmailModalContents.propTypes = {
  moveToSignInOnClick: PropTypes.func,
};

ConfirmEmailModalContents.defaultProps = {
  moveToSignInOnClick: () => { window.alert('Move to sign up clicked'); },
};

export default ConfirmEmailModalContents;
