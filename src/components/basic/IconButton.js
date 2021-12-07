import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/IconButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';

function IconButton(props) {
  const { src, alt } = props;
  return (
    <img src={src} alt={alt} className="icon-button" />
  );
}

IconButton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

IconButton.defaultProps = {
  src: defaultIcon,
  alt: 'Default question mark icon',
};

export default IconButton;
