import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './basic/IconButton';
import IndicatorIcon from './IndicatorIcon';
import menu from '../images/menu.svg';
import exclamation from '../images/exclamation.svg';
import '../stylesheets/SignedInNav.css';

function getNotificationsAlt(indicatorOn) {
  if (indicatorOn) {
    return 'Nav New Notifications Button';
  }
  return 'Nav Notifications Button';
}

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
        src={menu}
        alt="Nav Menu Button"
        iconWidth={menuButtonSize}
        iconHeight={menuButtonSize}
        onClick={menuButtonOnClick}
        rounded="none"
      />
      <p className="signed-in-nav-text">{navText}</p>
      <IndicatorIcon
        src={exclamation}
        alt={getNotificationsAlt(notificationsIndicatorOn)}
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
