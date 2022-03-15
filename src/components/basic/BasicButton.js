import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/main.css';
import '../../stylesheets/BasicButton.css';

function BasicButton(props) {
  const {
    className,
    children,
    onClick,
  } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyUp={onClick}
      className={`basic-button round-corners ${className}`}
    >
      {children}
    </button>
  );
}

BasicButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  className: '',
  children: <p>Children</p>,
  onClick: (e) => { window.alert(`'${e.target.innerText}' button clicked`); },
};

export default BasicButton;
