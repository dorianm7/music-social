import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../basic/IconButton/IconButton';
import { EXCLAMATION_NAME } from '../../Icons';

const defaultIconAlt = 'Default Indicator Icon';
const defaultIconWidth = '20px';
const defaultIconHeight = '20px';
const defaultOnClick = () => { window.alert(`${defaultIconAlt} clicked!`); };

function renderIconButton(icon, iconWidth, iconHeight, rounded, onClick) {
  return (
    <IconButton
      icon={icon}
      iconWidth={iconWidth}
      iconHeight={iconHeight}
      rounded={rounded}
      onClick={onClick}
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

function renderContent(on, icon, iconWidth, iconHeight, rounded, onClick) {
  const iconButton = renderIconButton(icon, iconWidth, iconHeight, rounded, onClick);
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
    iconWidth,
    iconHeight,
    rounded,
    onClick,
    on,
  } = props;

  return (
    <div
      className="indicator-icon"
      style={getIconStyle(iconWidth, iconHeight)}
    >
      {renderContent(on, icon, iconWidth, iconHeight, rounded, onClick)}
    </div>
  );
}

IndicatorIcon.propTypes = {
  icon: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.string,
  onClick: PropTypes.func,
  on: PropTypes.bool,
};

IndicatorIcon.defaultProps = {
  icon: EXCLAMATION_NAME,
  iconWidth: defaultIconWidth,
  iconHeight: defaultIconHeight,
  rounded: 'all',
  onClick: defaultOnClick,
  on: false,
};

export default IndicatorIcon;
