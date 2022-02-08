import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/FloatingRemoveButton.css';
import cancelIcon from '../images/close.svg';

function FloatingRemoveButton(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="floating-remove-button rounded-all"
      onClick={onClick}
    >
      <img
        src={cancelIcon}
        alt="X Icon"
        className="remove-icon"
      />
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
