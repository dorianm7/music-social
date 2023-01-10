import React from 'react';
import PropTypes from 'prop-types';

import './AnchorButton.css';

function AnchorButton(props) {
  const {
    className,
    text,
    href,
    hasOutline,
  } = props;

  const outlineClass = hasOutline ? ' outline' : '';

  return (
    <a className={`anchor-button round-corners ${outlineClass} ${className}`} href={href}>
      {text}
    </a>
  );
}

AnchorButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  hasOutline: PropTypes.bool,
};

AnchorButton.defaultProps = {
  className: '',
  text: 'Anchor Button',
  href: '#',
  hasOutline: false,
};

export default AnchorButton;
