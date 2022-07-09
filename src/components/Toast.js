import React from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Toast.css';

function Toast(props) {
  const { message } = props;

  return (
    <div
      className="toast round-corners"
    >
      {message}
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
};

Toast.defaultProps = {
  message: 'Toast message',
};

export default Toast;
