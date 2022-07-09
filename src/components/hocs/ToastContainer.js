import React, { useState } from 'react';

function ToastContainer(WrappedComponent) {
  const Wrapped = (props) => {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const toast = (message, time) => {
      setToastMessage(message);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      },
      time);
    };

    return (
      <WrappedComponent
        toastContainerClassName="toast-container"
        toastVisible={toastVisible}
        toast={toast}
        toastMessage={toastMessage}
        {...props}
      />
    );
  };

  return Wrapped;
}

export default ToastContainer;
