/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

function ModalContainer(WrappedComponent) {
  const Wrapped = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const MODAL_CONTAINER_CLASS_NAME = 'modal-container';
    const MODAL_CONTAINER_NO_CLICK_CLASS_NAME = 'no-clicks';
    const MODAL_CONTAINER_UNSELECTABLE_CLASS_NAME = 'unselectable';

    useEffect(() => {
      if (modalOpen) {
        document.querySelector(`.${MODAL_CONTAINER_CLASS_NAME}`).style.filter = 'brightness(.4) blur(3px)';
        document.querySelector(`.${MODAL_CONTAINER_CLASS_NAME}`).backgroundColor = 'rgba(0,0,0,.2)';
      }

      return () => {
        document.querySelector(`.${MODAL_CONTAINER_CLASS_NAME}`).style.filter = 'brightness(1) blur(0)';
        document.querySelector(`.${MODAL_CONTAINER_CLASS_NAME}`).backgroundColor = 'rgba(0,0,0,0)';
      };
    },
    [modalOpen]);

    const handleClick = () => {
      setModalOpen(!modalOpen);
    };

    const modalContainerClassName = modalOpen
      ? `${MODAL_CONTAINER_CLASS_NAME} ${MODAL_CONTAINER_NO_CLICK_CLASS_NAME} ${MODAL_CONTAINER_UNSELECTABLE_CLASS_NAME}`
      : `${MODAL_CONTAINER_CLASS_NAME}`;

    return (
      <WrappedComponent
        modalContainerClassName={modalContainerClassName}
        modalOpen={modalOpen}
        toggleHandler={handleClick}
        {...props}
      />
    );
  };

  return Wrapped;
}

export default ModalContainer;
