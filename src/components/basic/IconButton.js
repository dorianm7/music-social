import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/IconButton.css';
import '../../stylesheets/main.css';
import { renderIcon, DEFAULT_NAME } from '../../Icons';

function validateRoundedProp(rounded) {
  if (rounded !== 'all'
    && rounded !== 'top'
    && rounded !== 'right'
    && rounded !== 'bottom'
    && rounded !== 'left') {
    return 'none';
  }
  return rounded;
}

function IconButton(props) {
  const {
    className,
    icon,
    onClick,
    rounded,
    transparentBackground,
  } = props;

  const validRounded = validateRoundedProp(rounded);
  const transparentBackgroundClass = transparentBackground ? ' transparent-background' : '';

  return (
    <button type="button" onClick={onClick} onKeyUp={onClick} className={`icon-button rounded-${validRounded}${transparentBackgroundClass} ${className}`}>
      {renderIcon(icon)}
    </button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  rounded: PropTypes.string,
  transparentBackground: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: '',
  icon: DEFAULT_NAME,
  rounded: 'none',
  transparentBackground: false,
  onClick: () => { window.alert('Button clicked'); },
};

export default IconButton;
