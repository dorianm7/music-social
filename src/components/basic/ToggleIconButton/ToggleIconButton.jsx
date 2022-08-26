import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton';

import { IconNames } from '../../../Icons';

function ToggleIconButton(props) {
  const {
    toggle,
    initialClassName,
    initialIcon,
    initialIconAriaLabel,
    initialOnClick,
    initialTransparent,
    subsequentClassName,
    subsequentIcon,
    subsequentIconAriaLabel,
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
        ariaLabel={subsequentIconAriaLabel}
      />
    )
    : (
      <IconButton
        className={initialClassName}
        icon={initialIcon}
        onClick={initialOnClick}
        rounded={rounded}
        transparentBackground={initialTransparent}
        ariaLabel={initialIconAriaLabel}
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
  initialIconAriaLabel: PropTypes.string,
  initialOnClick: PropTypes.func,
  initialTransparent: PropTypes.bool,
  subsequentClassName: PropTypes.string,
  subsequentIcon: PropTypes.oneOf(Object.values(IconNames)),
  subsequentIconAriaLabel: PropTypes.string,
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
  initialIcon: IconNames.VERTICAL_DOTS,
  initialIconAriaLabel: 'Expand options',
  initialOnClick: () => {},
  initialTransparent: false,
  subsequentClassName: 'subsequent',
  subsequentIcon: IconNames.X,
  subsequentIconAriaLabel: 'Hide options',
  subsequentOnClick: () => {},
  subsequentTransparent: false,
  rounded: 'all',
};

export default ToggleIconButton;
