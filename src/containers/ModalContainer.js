import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

// Need modalOpenstate, sideMenuOpenState
function ModalContainer(WrappedComponent) {
  function Wrapped(props) {
    const { heading, contents } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const MODAL_CONTAINER_CLASS_NAME = 'modal-container';

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

    function handleClick() {
      setModalOpen(!modalOpen);
    }

    return (
      <WrappedComponent
        modalContainerClassName={MODAL_CONTAINER_CLASS_NAME}
        modalOpen={modalOpen}
        toggleHandler={() => handleClick}
        heading={heading}
        contents={contents}
      />
    );
  }

  Wrapped.propTypes = {
    heading: propTypes.string,
    contents: propTypes.node,
  };

  Wrapped.defaultProps = {
    heading: 'Modal',
    contents: <p>The contents for the modal</p>,
  };
  return Wrapped;
}

export default ModalContainer;
