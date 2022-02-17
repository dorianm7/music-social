import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './basic/IconButton';
import IndicatorIcon from './IndicatorIcon';
import '../stylesheets/SignedInNav.css';
import { HAMBURGER_MENU_NAME, EXCLAMATION_NAME } from '../Icons';

function SignedInNav(props) {
  const {
    menuButtonSize,
    menuButtonOnClick,
    navText,
    notificationsButtonSize,
    notificationsButtonOnClick,
    notificationsIndicatorOn,
  } = props;

  return (
    <nav className="signed-in-nav">
      <IconButton
        icon={HAMBURGER_MENU_NAME}
        iconWidth={menuButtonSize}
        iconHeight={menuButtonSize}
        onClick={menuButtonOnClick}
        rounded="none"
      />
      <p className="signed-in-nav-text">{navText}</p>
      <IndicatorIcon
        icon={EXCLAMATION_NAME}
        iconWidth={notificationsButtonSize}
        iconHeight={notificationsButtonSize}
        rounded="all"
        onClick={notificationsButtonOnClick}
        on={notificationsIndicatorOn}
      />
    </nav>
  );
}

SignedInNav.propTypes = {
  menuButtonSize: PropTypes.string,
  menuButtonOnClick: PropTypes.func,
  navText: PropTypes.string,
  notificationsButtonSize: PropTypes.string,
  notificationsButtonOnClick: PropTypes.func,
  notificationsIndicatorOn: PropTypes.bool,
};

SignedInNav.defaultProps = {
  menuButtonSize: '20px',
  menuButtonOnClick: () => { window.alert('Nav Menu Button Clicked'); },
  navText: 'Nav Text',
  notificationsButtonSize: '20px',
  notificationsButtonOnClick: () => { window.alert('Nav Notifications Button Clicked'); },
  notificationsIndicatorOn: false,
};

export default SignedInNav;
