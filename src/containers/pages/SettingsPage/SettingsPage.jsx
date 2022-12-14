import React from 'react';
import PropTypes from 'prop-types';
import InAppPage from '../../InAppPage/InAppPage';
import SettingsPageContents from '../../page-contents/SettingsPageContents/SettingsPageContents';

function SettingsPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
  } = props;

  return (
    <InAppPage
      pageTitle="Settings"
      sideMenuOnClick={sideMenuOnClick}
      notificationsOnClick={notificationsOnClick}
      hasNotification={hasNotification}
    >
      <SettingsPageContents />
    </InAppPage>
  );
}

SettingsPage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
};

SettingsPage.defaultProps = {
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
};

export default SettingsPage;
