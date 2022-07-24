import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

import IconButton from '../../basic/IconButton/IconButton';

import { X_NAME } from '../../../Icons';

function Modal(props) {
  const {
    heading,
    contents,
    closeHandler,
  } = props;

  return (
    <>
      <div className="modal-background" />
      <div className="modal">
        <IconButton
          className="modal-close-btn top-right"
          icon={X_NAME}
          iconWidth="40px"
          iconHeight="40px"
          rounded="all"
          onClick={closeHandler}
        />
        <h1 className="modal-heading">{heading}</h1>
        <div className="modal-content">
          {contents}
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  heading: PropTypes.string,
  contents: PropTypes.node,
  closeHandler: PropTypes.func,
};

Modal.defaultProps = {
  heading: 'Modal',
  contents: (
    <>
      Here is some text
      <span>Here is a paragraph element</span>
      Here is some text
    </>
  ),
  closeHandler: () => {},
};

export default Modal;
