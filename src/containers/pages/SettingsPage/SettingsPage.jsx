import React from 'react';
import PropTypes from 'prop-types';
import InAppPage from '../../InAppPage/InAppPage';
import SettingsPageContents from '../../page-contents/SettingsPageContents/SettingsPageContents';
import Toast from '../../../components/Toast/Toast';

import { deleteUserAccount } from '../../../firebase/auth-firebase';

function SettingsPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    // Toast container HOC Props
    // toastContainerClassName,
    toastVisible,
    toast,
    toastMessage,
  } = props;

  const deleteAccountHandler = async () => {
    await deleteUserAccount(
      () => {
        // Delete from Mongo
      },
      (err) => {
        toast(err.message, 4000);
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
      {toastVisible && (
        <Toast message={toastMessage} />
      )}
    </InAppPage>
  );
}

SettingsPage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
  // toastContainerClassName: PropTypes.string,
  toastVisible: PropTypes.bool,
  toast: PropTypes.func,
  toastMessage: PropTypes.string,
};

SettingsPage.defaultProps = {
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
  // toastContainerClassName: 'toast-container',
  toastVisible: false,
  toast: () => {},
  toastMessage: 'Toast message',
};

export default SettingsPage;
