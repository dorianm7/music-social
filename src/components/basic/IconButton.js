import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/IconButton.css';
import '../../stylesheets/main.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';

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
    src,
    alt,
    iconWidth,
    iconHeight,
    onClick,
    rounded,
    transparentBackground,
  } = props;

  const validRounded = validateRoundedProp(rounded);
  const transparentBackgroundClass = transparentBackground ? ' transparent-background' : '';

  return (
    <button type="button" onClick={onClick} onKeyUp={onClick} className={`icon-button rounded-${validRounded}${transparentBackgroundClass}`}>
      <img src={src} alt={alt} width={iconWidth} height={iconHeight} />
    </button>
  );
}

IconButton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.string,
  transparentBackground: PropTypes.bool,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  src: defaultIcon,
  alt: 'Default question mark icon',
  iconWidth: '20px',
  iconHeight: '20px',
  rounded: 'none',
  transparentBackground: false,
  onClick: () => { window.alert('Button clicked'); },
};

export default IconButton;
