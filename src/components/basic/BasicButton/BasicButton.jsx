/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './BasicButton.css';

function BasicButton(props) {
  const {
    className,
    children,
    hasOutline,
    ariaLabel,
    onClick,
  } = props;

  const outlineClass = hasOutline ? ' outline' : '';

  const noAriaProps = {
    className: `basic-button ${className} round-corners${outlineClass}`,
    onClick,
    onKeyUp: onClick,
  };

  const buttonProps = ariaLabel ? {
    ...noAriaProps,
    'aria-label': ariaLabel,
  } : noAriaProps;

  return (
    <button
      type="button"
      {...buttonProps}
    >
      {children}
    </button>
  );
}

BasicButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hasOutline: PropTypes.bool,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  className: '',
  children: <span>Children</span>,
  hasOutline: false,
  ariaLabel: '',
  onClick: (e) => e,
};

export default BasicButton;
