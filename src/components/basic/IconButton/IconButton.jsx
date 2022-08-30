import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.css';

import BasicButton from '../BasicButton/BasicButton';

import {
  renderIcon,
  IconNames,
} from '../../../Icons';

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
    hasOutline,
    ariaLabel,
  } = props;

  const validRounded = validateRoundedProp(rounded);
  const transparentBackgroundClass = transparentBackground ? ' transparent-background' : '';

  return (
    <BasicButton
      onClick={onClick}
      className={`icon-button rounded-${validRounded}${transparentBackgroundClass} ${className}`}
      hasOutline={hasOutline}
      ariaLabel={ariaLabel}
    >
      {renderIcon(icon, '', ariaLabel)}
      <span className="a11y-hide-visually">{ariaLabel}</span>
    </BasicButton>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(IconNames)),
  rounded: PropTypes.oneOf([
    'none',
    'all',
    'top',
    'right',
    'bottom',
    'left',
  ]),
  transparentBackground: PropTypes.bool,
  hasOutline: PropTypes.bool,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  icon: IconNames.DEFAULT,
  rounded: 'none',
  transparentBackground: false,
  hasOutline: false,
  onClick: () => {},
  ariaLabel: 'default',
};

export default IconButton;
