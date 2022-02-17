import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { VERTICAL_DOTS_NAME, X_NAME } from '../../Icons';

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
  initialIcon: PropTypes.string,
  initialOnClick: PropTypes.func,
  initialTransparent: PropTypes.bool,
  subsequentClassName: PropTypes.string,
  subsquentIcon: PropTypes.string,
  subsequentOnClick: PropTypes.func,
  subsequentTransparent: PropTypes.bool,
  rounded: PropTypes.string,
};

ToggleIconButton.defaultProps = {
  toggle: false,
  initialClassName: 'initial',
  initialIcon: VERTICAL_DOTS_NAME,
  initialOnClick: () => { window.alert('Initial Icon Clicked'); },
  initialTransparent: false,
  subsequentClassName: 'subsequent',
  subsequentIcon: X_NAME,
  subsequentOnClick: () => { window.alert('Subsequent Icon Clicked'); },
  subsequentTransparent: false,
  rounded: 'all',
};

export default ToggleIconButton;
