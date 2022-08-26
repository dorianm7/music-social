import React from 'react';
import PropTypes from 'prop-types';

import './DividerAddButton.css';

import IconButton from '../basic/IconButton/IconButton';

import { IconNames } from '../../Icons';

function DividerAddButton(props) {
  const { onClick } = props;
  return (
    <div className="divider-add-button">
      <hr />
      <IconButton
        icon={IconNames.PLUS}
        rounded="all"
        onClick={onClick}
        ariaLabel="Add item"
      />
      <hr />
    </div>
  );
}

DividerAddButton.propTypes = {
  onClick: PropTypes.func,
};

DividerAddButton.defaultProps = {
  onClick: () => {},
};

export default DividerAddButton;
