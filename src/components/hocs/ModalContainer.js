import React, { useState } from 'react';

function ModalContainer(WrappedComponent) {
  const Wrapped = (props) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
      setModalOpen(!modalOpen);
    };

    return (
      <WrappedComponent
        modalContainerClassName="modal-container"
        modalOpen={modalOpen}
        toggleHandler={handleClick}
        {...props}
      />
    );
  };

  return Wrapped;
}

export default ModalContainer;
