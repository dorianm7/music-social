import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../basic/IconButton/IconButton';
import IndicatorIcon from '../IndicatorIcon/IndicatorIcon';
import './AppNav.css';
import { HAMBURGER_MENU_NAME, EXCLAMATION_NAME } from '../../Icons';

function AppNav(props) {
  const {
    menuButtonSize,
    menuButtonOnClick,
    navText,
    notificationsButtonSize,
    notificationsButtonOnClick,
    notificationsIndicatorOn,
  } = props;

  return (
    <nav className="app-nav">
      <IconButton
        icon={HAMBURGER_MENU_NAME}
        iconWidth={menuButtonSize}
        iconHeight={menuButtonSize}
        onClick={menuButtonOnClick}
        rounded="none"
      />
      <span className="app-nav-text">{navText}</span>
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

AppNav.propTypes = {
  menuButtonSize: PropTypes.string,
  menuButtonOnClick: PropTypes.func,
  navText: PropTypes.string,
  notificationsButtonSize: PropTypes.string,
  notificationsButtonOnClick: PropTypes.func,
  notificationsIndicatorOn: PropTypes.bool,
};

AppNav.defaultProps = {
  menuButtonSize: '20px',
  menuButtonOnClick: () => { window.alert('Nav Menu Button Clicked'); },
  navText: 'Nav Text',
  notificationsButtonSize: '20px',
  notificationsButtonOnClick: () => { window.alert('Nav Notifications Button Clicked'); },
  notificationsIndicatorOn: false,
};

export default AppNav;
