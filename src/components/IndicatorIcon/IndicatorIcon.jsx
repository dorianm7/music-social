import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../basic/IconButton/IconButton';

import { IconNames } from '../../Icons';

const defaultIconWidth = '20px';
const defaultIconHeight = '20px';

function renderIconButton(icon, rounded, onClick, ariaLabel) {
  return (
    <IconButton
      icon={icon}
      rounded={rounded}
      onClick={onClick}
      ariaLabel={ariaLabel}
    />
  );
}

function getIconStyle(iconWidth, iconHeight) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: iconWidth,
    height: iconHeight,
  };
}

function getIndicatorStyle(iconWidth, iconHeight) {
  return {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: '50%',
    width: `calc(${iconWidth} * 0.5)`,
    height: `calc(${iconWidth} * 0.5)`,
    marginLeft: iconWidth,
    marginBottom: iconHeight,
  };
}

function renderContent(
  on,
  iconOnAriaLabel,
  icon,
  iconAriaLabel,
  iconWidth,
  iconHeight,
  rounded,
  onClick,
) {
  const iconButton = renderIconButton(
    icon,
    rounded,
    onClick,
    on ? iconOnAriaLabel : iconAriaLabel,
  );
  if (on) {
    return (
      <>
        {iconButton}
        <div
          className="indicator"
          style={getIndicatorStyle(iconWidth, iconHeight)}
        />
      </>
    );
  }
  return iconButton;
}

function IndicatorIcon(props) {
  const {
    icon,
    iconAriaLabel,
    iconWidth,
    iconHeight,
    rounded,
    onClick,
    on,
    iconOnAriaLabel,
  } = props;

  return (
    <div
      className="indicator-icon"
      style={getIconStyle(iconWidth, iconHeight)}
    >
      {
        renderContent(
          on,
          iconOnAriaLabel,
          icon,
          iconAriaLabel,
          iconWidth,
          iconHeight,
          rounded,
          onClick,
        )
      }
    </div>
  );
}

IndicatorIcon.propTypes = {
  icon: PropTypes.oneOf(Object.values(IconNames)),
  iconAriaLabel: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.oneOf([
    'none',
    'all',
    'top',
    'right',
    'bottom',
    'left',
  ]),
  onClick: PropTypes.func,
  on: PropTypes.bool,
  iconOnAriaLabel: PropTypes.string,
};

IndicatorIcon.defaultProps = {
  icon: IconNames.EXCLAMATION,
  iconAriaLabel: 'Indicator',
  iconWidth: defaultIconWidth,
  iconHeight: defaultIconHeight,
  rounded: 'all',
  onClick: () => {},
  on: false,
  iconOnAriaLabel: 'Indicator on',
};

export default IndicatorIcon;
