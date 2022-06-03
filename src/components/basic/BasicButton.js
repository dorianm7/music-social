import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/main.css';
import '../../stylesheets/BasicButton.css';

function BasicButton(props) {
  const {
    className,
    children,
    hasOutline,
    onClick,
  } = props;

  const outlineClass = hasOutline ? ' outline' : '';

  return (
    <button
      type="button"
      className={
        `basic-button ${className} round-corners${outlineClass}`
      }
      onClick={onClick}
      onKeyUp={onClick}
    >
      {children}
    </button>
  );
}

BasicButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  hasOutline: PropTypes.bool,
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  className: '',
  children: <span>Children</span>,
  hasOutline: false,
  onClick: (e) => { window.alert(`'${e.target.innerText}' button clicked`); },
};

export default BasicButton;
