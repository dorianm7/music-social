import {
  React,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import InAppPage from '../../InAppPage/InAppPage';
import SettingsPageContents from '../../page-contents/SettingsPageContents/SettingsPageContents';
import Toast from '../../../components/Toast/Toast';
import Modal from '../../../components/modals/Modal/Modal';
import SignInModalContents from '../../../components/modal-contents/SignInModalContents/SignInModalContents';

import {
  deleteUserAccount,
  emailPasswordSignIn,
  googleSignIn,
} from '../../../firebase/auth-firebase';
import { useUserContext } from '../../../contexts/UserContext';
import deleteUser from '../../../backend/user/user';

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
  const [modalOpen, setModalOpen] = useState(false);

  // TODO Figure out how/where to store correct uid
  const user = useUserContext();

  const deleteFromFirebase = () => deleteUserAccount()
    .catch((err) => {
      throw new Error(err.code);
    });

  const deleteFromMongo = () => deleteUser(user.uid)
    .catch((err) => {
      let errorMsg;
      if (err.response) {
        if (err.response.status === 400) {
          errorMsg = err.response.data.detail;
        } else {
          errorMsg = 'Internal error. Try again';
        }
      } else if (err.request) {
        errorMsg = 'Didn\'t receive response from server';
      } else {
        errorMsg = 'Something weird happened. Try again';
      }
      throw new Error(errorMsg);
    });

  const deleteAccounts = () => deleteFromMongo()
    .then(() => deleteFromFirebase())
    .catch((err) => toast(err.message, 4000));

  // TODO Create/use re-sign in Modal
  const signInModalContents = (
    <SignInModalContents
      formOnSubmit={async (email, password) => {
        await emailPasswordSignIn(
          email,
          password,
          deleteAccounts,
          (err) => toast(err.message, 4000),
        );
      }}
      googleSignInOnClick={() => {
        googleSignIn(
          deleteAccounts,
          (err) => toast(err.message, 4000),
        );
      }}
    />
  );

  return (
    <>
      <InAppPage
        pageTitle="Settings"
        sideMenuOnClick={sideMenuOnClick}
        notificationsOnClick={notificationsOnClick}
        hasNotification={hasNotification}
      >
        <SettingsPageContents
          deleteAccountOnClick={() => setModalOpen(true)}
        />
      </InAppPage>
      <Modal
        heading="Sign In"
        contents={signInModalContents}
        closeHandler={() => setModalOpen(false)}
        open={modalOpen}
      />
      {toastVisible && (
        <Toast message={toastMessage} />
      )}
    </>
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
