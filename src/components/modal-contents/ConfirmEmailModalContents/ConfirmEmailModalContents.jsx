import React from 'react';
import PropTypes from 'prop-types';

import './ConfirmEmailModalContents.css';

function ConfirmEmailModalContents(props) {
  const { moveToSignInOnClick } = props;
  return (
    <div className="confirm-email-modal-contents">
      <p className="confirm-text">
        Please confirm email to recieve updates and sign in to your account.
      </p>
      <button
        type="button"
        className="anchor-like"
        onClick={moveToSignInOnClick}
      >
        Move to sign in
      </button>
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
