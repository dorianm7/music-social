import {
  React,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
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
import { deleteUser } from '../../../backend/user/user';
import { isAuthorized, removeTokens } from '../../../backend/spotify/spotify-auth';
import { getAuthorizeHref } from '../../../backend/spotify/spotify-auth-helpers';

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
  const navigate = useNavigate();
  const user = useUserContext();

  const authorizedSpotify = isAuthorized();
  const authorizeSpotifyHref = getAuthorizeHref(user.uid, '/settings');

  const deauthorizeSpotifyOnClick = () => removeTokens(user.uid)
    .then(() => navigate(0))
    .catch((err) => toast(err.message, 4000));

  const deleteAccounts = () => deleteUser(user.uid)
    .then(() => deleteUserAccount());

  const emailPasswordDeleteAccount = (email, password) => emailPasswordSignIn(
    email,
    password,
  )
    .then(() => deleteAccounts())
    .catch((err) => {
      toast(err.message, 4000);
      return Promise.reject(err);
    });

  const googleDeleteAccount = () => googleSignIn()
    .then(() => deleteAccounts())
    .catch((err) => {
      toast(err.message, 4000);
      return Promise.reject(err);
    });

  const signInModalContents = (
    <SignInModalContents
      resigningIn
      providerId={user.providerData[0].providerId}
      formOnSubmit={emailPasswordDeleteAccount}
      googleSignInOnClick={googleDeleteAccount}
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
          authorizeSpotifyHref={authorizeSpotifyHref}
          deleteAccountOnClick={() => setModalOpen(true)}
          deauthorizeSpotifyOnClick={deauthorizeSpotifyOnClick}
          authorizedSpotify={authorizedSpotify}
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
