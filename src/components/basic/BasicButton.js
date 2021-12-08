import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/main.css';
import '../../stylesheets/BasicButton.css';

function BasicButton(props) {
  const { text, onClick } = props;
  return (
    <button type="button" onClick={onClick} onKeyUp={onClick} className="basic-button round-corners">
      {text}
    </button>
  );
}

BasicButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  text: 'Text',
  onClick: (e) => { window.alert(`'${e.target.innerText}' button clicked`); },
};

export default BasicButton;
