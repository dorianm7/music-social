import {
  React,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../contexts/UserContext';
import { getAuthorizeHref } from '../../../backend/spotify/spotify-auth-helpers';
import {
  getAccessToken,
  isAuthorized,
  removeTokens,
} from '../../../backend/spotify/spotify-auth';
import { getProfile } from '../../../backend/spotify/spotify';
import {
  getUser,
  patchUser,
} from '../../../backend/users/users';
import { deleteUser } from '../../../backend/app/user';
import {
  emailPasswordSignIn,
  googleSignIn,
} from '../../../firebase/auth-firebase';

import './SettingsPageContents.css';

import BasicButton from '../../../components/basic/BasicButton/BasicButton';
import AnchorButton from '../../../components/basic/AnchorButton/AnchorButton';
import SignInModalContents from '../../../components/modal-contents/SignInModalContents/SignInModalContents';

function SettingsPageContents(props) {
  const {
    toast,
    setModalHeading,
    setModalContents,
    setModalOpen,
    setInAppPageTitle,
  } = props;
  const navigate = useNavigate();
  const user = useUserContext();

  const authorizedSpotify = isAuthorized();

  useEffect(async () => {
    setInAppPageTitle('Settings');
    document.title = 'Music Social | Settings';
    if (authorizedSpotify) {
      try {
        const userRes = await getUser(user.uid, ['spotify_user_id']);
        const spotifyId = userRes.data.spotify_user_id;
        if (!spotifyId) {
          const spotifyAccessToken = await getAccessToken(user.uid);
          const spotifyIdRes = await getProfile(spotifyAccessToken);

          const replaceSpotifyIdOp = {
            op: 'replace',
            path: '/spotify_user_id',
            value: spotifyIdRes.id,
          };
          await patchUser(user.uid, [replaceSpotifyIdOp]);
        }
      } catch (err) {
        toast(err.message, 4000);
      }
    }
  }, []);

  const authorizeSpotifyHref = getAuthorizeHref(user.uid, '/settings');

  const deauthorizeSpotifyOnClick = () => removeTokens(user.uid)
    .then(() => navigate(0))
    .catch((err) => toast(err.message, 4000));

  const emailPasswordDeleteAccount = (email, password) => emailPasswordSignIn(
    email,
    password,
  )
    .then(() => deleteUser(user.uid))
    .catch((err) => {
      toast(err.message, 4000);
      return Promise.reject(err);
    });

  const googleDeleteAccount = () => googleSignIn()
    .then(() => deleteUser(user.uid))
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

  const deleteAccountOnClick = () => {
    setModalContents(signInModalContents);
    setModalHeading('Sign In');
    setModalOpen(true);
  };

  const spotifyAuthorizeButton = authorizedSpotify
    ? <BasicButton onClick={deauthorizeSpotifyOnClick}>Deauthorize Spotify</BasicButton>
    : <AnchorButton href={authorizeSpotifyHref} text="Authorize Spotify" />;
  return (
    <div className="settings-page-contents">
      {spotifyAuthorizeButton}
      <BasicButton onClick={deleteAccountOnClick}>
        Delete Account
      </BasicButton>
    </div>
  );
}

SettingsPageContents.propTypes = {
  toast: PropTypes.func,
  setModalHeading: PropTypes.func,
  setModalContents: PropTypes.func,
  setModalOpen: PropTypes.func,
  setInAppPageTitle: PropTypes.func,
};

SettingsPageContents.defaultProps = {
  toast: () => {},
  setModalHeading: () => {},
  setModalContents: () => {},
  setModalOpen: () => {},
  setInAppPageTitle: () => {},
};

export default SettingsPageContents;
