import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/IconButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';

function IconButton(props) {
  const {
    src,
    alt,
    iconWidth,
    iconHeight,
    onClick,
  } = props;
  return (
    <button type="button" onClick={onClick} onKeyUp={onClick} className="icon-button">
      <img src={src} alt={alt} width={iconWidth} height={iconHeight} />
    </button>
  );
}

IconButton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  src: defaultIcon,
  alt: 'Default question mark icon',
  iconWidth: '20px',
  iconHeight: '20px',
  onClick: () => { window.alert('Button clicked'); },
};

export default IconButton;
