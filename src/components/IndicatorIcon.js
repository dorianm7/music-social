import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './basic/IconButton';
import defaultIcon from '../images/exclamation.svg';

const defaultIconAlt = 'Default Indicator Icon';
const defaultIconWidth = '20px';
const defaultIconHeight = '20px';
const defaultOnClick = () => { window.alert(`${defaultIconAlt} clicked!`); };

function renderIconButton(src, alt, iconWidth, iconHeight, rounded, onClick) {
  return (
    <IconButton
      src={src}
      alt={alt}
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

function renderContent(on, src, alt, iconWidth, iconHeight, rounded, onClick) {
  const iconButton = renderIconButton(src, alt, iconWidth, iconHeight, rounded, onClick);
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
    src,
    alt,
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
      {renderContent(on, src, alt, iconWidth, iconHeight, rounded, onClick)}
    </div>
  );
}

IndicatorIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.string,
  onClick: PropTypes.func,
  on: PropTypes.bool,
};

IndicatorIcon.defaultProps = {
  src: defaultIcon,
  alt: defaultIconAlt,
  iconWidth: defaultIconWidth,
  iconHeight: defaultIconHeight,
  rounded: 'all',
  onClick: defaultOnClick,
  on: false,
};

export default IndicatorIcon;
