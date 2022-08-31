import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

import IconButton from '../../basic/IconButton/IconButton';

import { IconNames } from '../../../Icons';

function Modal(props) {
  const {
    heading,
    contents,
    closeHandler,
    open,
  } = props;

  return !open ? <></> : (
    <>
      <div className="modal-background" />
      <dialog
        open={open}
        className="modal"
      >
        <IconButton
          className="modal-close-btn top-right"
          icon={IconNames.X}
          rounded="all"
          onClick={closeHandler}
          ariaLabel="Close modal"
        />
        <h1 className="modal-heading">{heading}</h1>
        <div className="modal-content">
          {contents}
        </div>
      </dialog>
    </>
  );
}

Modal.propTypes = {
  heading: PropTypes.string,
  contents: PropTypes.node,
  closeHandler: PropTypes.func,
  open: PropTypes.bool,
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
  open: false,
};

export default Modal;
