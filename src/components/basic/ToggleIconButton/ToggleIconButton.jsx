import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import { VERTICAL_DOTS_NAME, X_NAME } from '../../../Icons';

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
    iconWidth,
    iconHeight,
    rounded,
  } = props;

  const iconButton = toggle
    ? (
      <IconButton
        className={subsequentClassName}
        icon={subsequentIcon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        onClick={subsequentOnClick}
        rounded={rounded}
        transparentBackground={subsequentTransparent}
      />
    )
    : (
      <IconButton
        className={initialClassName}
        icon={initialIcon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
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
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.string,
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
  iconWidth: '20px',
  iconHeight: '20px',
  rounded: 'all',
};

export default ToggleIconButton;
