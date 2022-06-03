import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/IconButton.css';
import '../../stylesheets/main.css';
import { renderIcon, DEFAULT_NAME } from '../../Icons';
import BasicButton from './BasicButton';

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
    iconWidth,
    iconHeight,
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
      {renderIcon(icon, iconWidth, iconHeight)}
    </BasicButton>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.string,
  transparentBackground: PropTypes.bool,
  hasOutline: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  className: '',
  icon: DEFAULT_NAME,
  iconWidth: '20px',
  iconHeight: '20px',
  rounded: 'none',
  transparentBackground: false,
  hasOutline: false,
  onClick: () => { window.alert('Button clicked'); },
};

export default IconButton;
