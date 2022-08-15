import React from 'react';
import PropTypes from 'prop-types';

import './FloatingRemoveButton.css';

import {
  renderIcon,
  IconNames,
} from '../../Icons';

function FloatingRemoveButton(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      className="floating-remove-button rounded-all"
      onClick={onClick}
    >
      {renderIcon(IconNames.X, 'remove-icon')}
      <span className="remove-text">Remove</span>
    </button>
  );
}

FloatingRemoveButton.propTypes = {
  onClick: PropTypes.func,
};

FloatingRemoveButton.defaultProps = {
  onClick: () => {},
};

export default FloatingRemoveButton;
