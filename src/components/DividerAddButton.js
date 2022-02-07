import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/DividerAddButton.css';
import IconButton from './basic/IconButton';
import plusIcon from '../images/plus.svg';

function DividerAddButton(props) {
  const { onClick } = props;
  return (
    <div className="divider-add-button">
      <hr />
      <IconButton
        src={plusIcon}
        alt="Add"
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
