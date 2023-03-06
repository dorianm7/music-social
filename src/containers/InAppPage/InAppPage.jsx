import {
  React,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom';
import { signOutUser } from '../../backend/app/user';
import { getUser as getUserFromDb } from '../../backend/users/users';
import { SPOTIFY_SESSION_STORAGE_VALUES } from '../../backend/spotify/spotify-auth-helpers';
import { refreshTokens } from '../../backend/spotify/spotify-auth';

import './InAppPage.css';

import AppNav from '../../components/AppNav/AppNav';
import Footer from '../../components/Footer/Footer';
import SideMenu from '../../components/SideMenu/SideMenu';
import { useUserContext } from '../../contexts/UserContext';

function InAppPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    pageTitle,
    toast,
  } = props;
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [hasAuthorizedSpotify, setHasAuthorizedSpotify] = useState(false);
  const [loadingContents, setLoadingContents] = useState(false);
  const user = useUserContext();
  useEffect(async () => {
    if (!SPOTIFY_SESSION_STORAGE_VALUES.accessToken && !hasAuthorizedSpotify) {
      setLoadingContents(true);
      const userRes = await getUserFromDb(user.uid, ['spotify_refresh_token']);
      if (userRes.data.spotify_refresh_token) {
        await refreshTokens(user.uid);
        setHasAuthorizedSpotify(true);
      }
      setLoadingContents((prevLoadingContents) => !prevLoadingContents);
    }
  }, [hasAuthorizedSpotify]);
  const navigate = useNavigate();

  const sideMenuSettingsOnClick = () => {
    setSideMenuVisible(!sideMenuVisible);
    navigate('/settings');
  };
  const sideMenuHomeOnClick = () => {
    setSideMenuVisible(!sideMenuVisible);
    navigate('/home');
  };
  const sideMenuSignOutOnClick = () => signOutUser()
    .catch((e) => toast(e.message, 4000));

  return (
    <div className="in-app-page">
      <header>
        <AppNav
          menuButtonSize="25px"
          menuButtonOnClick={() => {
            setSideMenuVisible(!sideMenuVisible);
            sideMenuOnClick();
          }}
          notificationsButtonSize="25px"
          notificationsButtonOnClick={notificationsOnClick}
          notificationsIndicatorOn={hasNotification}
          navText="Music Social"
        />
      </header>
      {sideMenuVisible && (
        <SideMenu
          settingsOnClick={sideMenuSettingsOnClick}
          homeOnClick={sideMenuHomeOnClick}
          signOutOnClick={sideMenuSignOutOnClick}
        />
      )}
      <main>
        <h1>{pageTitle}</h1>
        {!loadingContents && (
          <Outlet
            context={[hasAuthorizedSpotify, setHasAuthorizedSpotify]}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

InAppPage.propTypes = {
  sideMenuOnClick: PropTypes.func,
  notificationsOnClick: PropTypes.func,
  hasNotification: PropTypes.bool,
  pageTitle: PropTypes.string,
  toast: PropTypes.func,
};

InAppPage.defaultProps = {
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
  pageTitle: 'In-app Page',
  toast: () => {},
};

export default InAppPage;
