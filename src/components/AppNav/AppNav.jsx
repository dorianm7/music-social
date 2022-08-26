import React from 'react';
import PropTypes from 'prop-types';

import './AppNav.css';

import IconButton from '../basic/IconButton/IconButton';
import IndicatorIcon from '../IndicatorIcon/IndicatorIcon';

import { IconNames } from '../../Icons';

function AppNav(props) {
  const {
    menuButtonOnClick,
    navText,
    notificationsButtonOnClick,
    notificationsIndicatorOn,
  } = props;

  return (
    <nav className="app-nav">
      <IconButton
        icon={IconNames.HAMBURGER_MENU}
        onClick={menuButtonOnClick}
        rounded="none"
        ariaLabel="Open side menu"
      />
      <span className="app-nav-text">{navText}</span>
      <IndicatorIcon
        icon={IconNames.EXCLAMATION}
        iconWidth="20px"
        iconHeight="20px"
        rounded="all"
        onClick={notificationsButtonOnClick}
        on={notificationsIndicatorOn}
      />
    </nav>
  );
}

AppNav.propTypes = {
  menuButtonOnClick: PropTypes.func,
  navText: PropTypes.string,
  notificationsButtonOnClick: PropTypes.func,
  notificationsIndicatorOn: PropTypes.bool,
};

AppNav.defaultProps = {
  menuButtonOnClick: () => {},
  navText: 'Nav Text',
  notificationsButtonOnClick: () => {},
  notificationsIndicatorOn: false,
};

export default AppNav;
