import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/IconButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';

function IconButton(props) {
  const { src, alt, onClick } = props;
  return (
    <button type="button" onClick={onClick} onKeyUp={onClick} className="icon-button">
      <img src={src} alt={alt} />
    </button>
  );
}

IconButton.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.defaultProps = {
  src: defaultIcon,
  alt: 'Default question mark icon',
  onClick: () => { window.alert('Button clicked'); },
};

export default IconButton;
