import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.css';

import BasicButton from '../BasicButton/BasicButton';

import {
  renderIcon,
  DEFAULT_NAME,
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
  } = props;

  const validRounded = validateRoundedProp(rounded);
  const transparentBackgroundClass = transparentBackground ? ' transparent-background' : '';

  return (
    <BasicButton
      onClick={onClick}
      className={`icon-button rounded-${validRounded}${transparentBackgroundClass} ${className}`}
      hasOutline={hasOutline}
    >
      {renderIcon(icon)}
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
};

IconButton.defaultProps = {
  className: '',
  icon: DEFAULT_NAME,
  rounded: 'none',
  transparentBackground: false,
  hasOutline: false,
  onClick: () => {},
};

export default IconButton;
