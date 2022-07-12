import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/DividerAddButton.css';
import IconButton from './basic/IconButton';
import { PLUS_NAME } from '../Icons';

function DividerAddButton(props) {
  const { onClick } = props;
  return (
    <div className="divider-add-button">
      <hr />
      <IconButton
        icon={PLUS_NAME}
        rounded="all"
        onClick={onClick}
      />
      <hr />
    </div>
  );
}

DividerAddButton.propTypes = {
  onClick: PropTypes.func,
};

DividerAddButton.defaultProps = {
  onClick: () => { window.alert('Divider Add Button Clicked'); },
};

export default DividerAddButton;
