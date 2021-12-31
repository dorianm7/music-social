import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/Modal.css';

function Modal(props) {
  const {
    heading,
    contents,
  } = props;
  return (
    <div className="modal">
      <h1 className="modal-heading">{heading}</h1>
      <div className="modal-content">
        {contents}
      </div>
    </div>
  );
}

Modal.propTypes = {
  heading: PropTypes.string,
  contents: PropTypes.node,
};

Modal.defaultProps = {
  heading: 'Modal',
  contents: (
    <>
      Here is some text
      <p>Here is a paragraph element</p>
      Here is some text
    </>
  ),
};

export default Modal;
