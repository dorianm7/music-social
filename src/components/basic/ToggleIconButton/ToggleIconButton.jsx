import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';

import {
  VERTICAL_DOTS_NAME,
  X_NAME,
  IconNames,
} from '../../../Icons';

function ToggleIconButton(props) {
  const {
    toggle,
    initialClassName,
    initialIcon,
    initialOnClick,
    initialTransparent,
    subsequentClassName,
    subsequentIcon,
    subsequentOnClick,
    subsequentTransparent,
    rounded,
  } = props;

  const iconButton = toggle
    ? (
      <IconButton
        className={subsequentClassName}
        icon={subsequentIcon}
        onClick={subsequentOnClick}
        rounded={rounded}
        transparentBackground={subsequentTransparent}
      />
    )
    : (
      <IconButton
        className={initialClassName}
        icon={initialIcon}
        onClick={initialOnClick}
        rounded={rounded}
        transparentBackground={initialTransparent}
      />
    );

  return (
    iconButton
  );
}

ToggleIconButton.propTypes = {
  toggle: PropTypes.bool,
  initialClassName: PropTypes.string,
  initialIcon: PropTypes.oneOf(Object.values(IconNames)),
  initialOnClick: PropTypes.func,
  initialTransparent: PropTypes.bool,
  subsequentClassName: PropTypes.string,
  subsequentIcon: PropTypes.oneOf(Object.values(IconNames)),
  subsequentOnClick: PropTypes.func,
  subsequentTransparent: PropTypes.bool,
  rounded: PropTypes.oneOf([
    'none',
    'all',
    'top',
    'right',
    'bottom',
    'left',
  ]),
};

ToggleIconButton.defaultProps = {
  toggle: false,
  initialClassName: 'initial',
  initialIcon: VERTICAL_DOTS_NAME,
  initialOnClick: () => {},
  initialTransparent: false,
  subsequentClassName: 'subsequent',
  subsequentIcon: X_NAME,
  subsequentOnClick: () => {},
  subsequentTransparent: false,
  rounded: 'all',
};

export default ToggleIconButton;
