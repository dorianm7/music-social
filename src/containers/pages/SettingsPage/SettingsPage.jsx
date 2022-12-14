import React from 'react';
import PropTypes from 'prop-types';
import InAppPage from '../../InAppPage/InAppPage';
import SettingsPageContents from '../../page-contents/SettingsPageContents/SettingsPageContents';

import { deleteUserAccount } from '../../../firebase/auth-firebase';

function SettingsPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
  } = props;

  const deleteAccountHandler = async () => {
    await deleteUserAccount(
      () => {
        // Delete from Mongo
      },
      () => {
        // Toast: Error Deleting Account. Try again
      },
    );
  };

  return (
    <InAppPage
      pageTitle="Settings"
      sideMenuOnClick={sideMenuOnClick}
      notificationsOnClick={notificationsOnClick}
      hasNotification={hasNotification}
    >
      <SettingsPageContents
        deleteAccountOnClick={deleteAccountHandler}
      />
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
