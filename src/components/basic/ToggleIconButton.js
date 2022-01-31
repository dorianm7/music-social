import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import initIconSrc from '../../images/dots-vertical.svg';
import subsIconSrc from '../../images/close.svg';

function ToggleIconButton(props) {
  const {
    toggle,
    initialClassName,
    initialSrc,
    initialAlt,
    initialOnClick,
    initialTransparent,
    subsequentClassName,
    subsequentSrc,
    subsequentAlt,
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
        src={subsequentSrc}
        alt={subsequentAlt}
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
        src={initialSrc}
        alt={initialAlt}
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
  initialSrc: PropTypes.string,
  initialAlt: PropTypes.string,
  initialOnClick: PropTypes.func,
  initialTransparent: PropTypes.bool,
  subsequentClassName: PropTypes.string,
  subsequentSrc: PropTypes.string,
  subsequentAlt: PropTypes.string,
  subsequentOnClick: PropTypes.func,
  subsequentTransparent: PropTypes.bool,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  rounded: PropTypes.string,
};

ToggleIconButton.defaultProps = {
  toggle: false,
  initialClassName: 'initial',
  initialSrc: initIconSrc,
  initialAlt: 'Initial',
  initialOnClick: () => { window.alert('Initial Icon Clicked'); },
  initialTransparent: false,
  subsequentClassName: 'subsequent',
  subsequentSrc: subsIconSrc,
  subsequentAlt: 'Subsequent',
  subsequentOnClick: () => { window.alert('Subsequent Icon Clicked'); },
  subsequentTransparent: false,
  iconWidth: '20px',
  iconHeight: '20px',
  rounded: 'all',
};

export default ToggleIconButton;
