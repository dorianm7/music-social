import React from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/modal-contents/ConfirmEmailModalContents.css';

import BasicButton from '../../basic/BasicButton';

function ConfirmEmailModalContents(props) {
  const { moveToSignInOnClick } = props;
  return (
    <div className="confirm-email-modal-contents">
      <p className="confirm-text">
        Please confirm email to recieve updates and sign in to your account.
      </p>
      <BasicButton
        className="anchor-like"
        onClick={moveToSignInOnClick}
      >
        Move to sign in
      </BasicButton>
    </div>
  );
}

ConfirmEmailModalContents.propTypes = {
  moveToSignInOnClick: PropTypes.func,
};

ConfirmEmailModalContents.defaultProps = {
  moveToSignInOnClick: () => { window.alert('Move to sign up clicked'); },
};

export default ConfirmEmailModalContents;
