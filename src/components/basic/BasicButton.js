import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/main.css';
import '../../stylesheets/BasicButton.css';

function BasicButton(props) {
  const { text } = props;
  return (
    <p className="basic-button unselectable">
      {text}
    </p>
  );
}

BasicButton.propTypes = {
  text: PropTypes.string,
};

BasicButton.defaultProps = {
  text: 'Text',
};

export default BasicButton;
