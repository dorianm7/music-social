import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/FloatingRemoveButton.css';
import { renderIcon, X_NAME } from '../Icons';

function FloatingRemoveButton(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="floating-remove-button rounded-all"
      onClick={onClick}
    >
      {renderIcon(X_NAME, '20px', '20px', 'remove-icon')}
      <p className="remove-text">Remove</p>
    </button>
  );
}

FloatingRemoveButton.propTypes = {
  onClick: PropTypes.func,
};

FloatingRemoveButton.defaultProps = {
  onClick: () => window.alert('Floating Remove Button Clicked'),
};

export default FloatingRemoveButton;
