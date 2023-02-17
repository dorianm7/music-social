import { React, useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Outlet, useNavigate } from 'react-router-dom';
import { signOutUser } from '../../backend/app/user';

import './InAppPage.css';

import AppNav from '../../components/AppNav/AppNav';
import Footer from '../../components/Footer/Footer';
import SideMenu from '../../components/SideMenu/SideMenu';
import { getRefreshTokenHref, SPOTIFY_LOCAL_STORAGE_KEYS } from '../../backend/spotify/spotify-auth-helpers';
import { getUser } from '../../backend/users/users';
import { useUserContext } from '../../contexts/UserContext';
import { createSpotifyClient } from '../../backend/spotify/spotify';

function InAppPage(props) {
  const {
    sideMenuOnClick,
    notificationsOnClick,
    hasNotification,
    pageTitle,
  } = props;
  const [sideMenuVisible, setSideMenuVisible] = useState(false);
  const [spotifyAccessToken, setSpotifyAccessToken] = useState('');
  const [spotifyAccessTokenExpiresIn, setSpotifyAccessTokenExpiresIn] = useState(0);
  const [spotifyAccessTokenTimestamp, setSpotifyAccessTokenTimestamp] = useState(new Date(0));

  const user = useUserContext();
  const navigate = useNavigate();
  const stateTokenTimeDifference = (Date.now() - spotifyAccessTokenTimestamp) / 1000;
  const stateTokenIsValid = spotifyAccessToken
    && (stateTokenTimeDifference < spotifyAccessTokenExpiresIn);

  const refreshTokens = async (uid) => {
    const refreshTokenEndpoint = getRefreshTokenHref(uid);
    const refreshTokenRes = await axios.get(refreshTokenEndpoint);
    const refreshTokenData = refreshTokenRes.data;
    const timestamp = Date.now();
    setSpotifyAccessToken(refreshTokenData.access_token);
    setSpotifyAccessTokenExpiresIn(refreshTokenData.expires_in);
    setSpotifyAccessTokenTimestamp(timestamp);
    localStorage.setItem(SPOTIFY_LOCAL_STORAGE_KEYS.accessToken, refreshTokenData.access_token);
    localStorage.setItem(SPOTIFY_LOCAL_STORAGE_KEYS.expiresIn, refreshTokenData.expires_in);
    localStorage.setItem(SPOTIFY_LOCAL_STORAGE_KEYS.timestamp, timestamp);
    return Promise.resolve(refreshTokenData.access_token);
  };

  useEffect(async () => {
    const localSpotifyAccessToken = localStorage.getItem(SPOTIFY_LOCAL_STORAGE_KEYS.accessToken);
    if (spotifyAccessToken) {
      if (!stateTokenIsValid) {
        await refreshTokens(user.uid);
      }
      if (stateTokenIsValid && !localSpotifyAccessToken) {
        localStorage.setItem(SPOTIFY_LOCAL_STORAGE_KEYS.accessToken, spotifyAccessToken);
        localStorage.setItem(SPOTIFY_LOCAL_STORAGE_KEYS.expiresIn, spotifyAccessTokenExpiresIn);
        localStorage.setItem(SPOTIFY_LOCAL_STORAGE_KEYS.timestamp, spotifyAccessTokenTimestamp);
      }
    } else if (localSpotifyAccessToken) {
      const localSpotifyAccessTokenExpiresIn = localStorage.getItem(
        SPOTIFY_LOCAL_STORAGE_KEYS.expiresIn,
      );
      const localSpotifyAccessTokenTimestamp = localStorage.getItem(
        SPOTIFY_LOCAL_STORAGE_KEYS.timestamp,
      );
      const localTokenTimeDifference = (Date.now() - localSpotifyAccessTokenTimestamp) / 1000;
      const localTokenValid = localTokenTimeDifference < localSpotifyAccessTokenExpiresIn;
      if (!localTokenValid) {
        await refreshTokens(user.uid);
      }
      if (localTokenValid && !spotifyAccessToken) {
        setSpotifyAccessToken(localSpotifyAccessToken);
        setSpotifyAccessTokenExpiresIn(localSpotifyAccessTokenExpiresIn);
        setSpotifyAccessTokenTimestamp(localSpotifyAccessTokenTimestamp);
      }
    } else {
      const refreshTokenRes = await getUser(user.uid, ['spotify_refresh_token']);
      if (refreshTokenRes.data.spotify_refresh_token) {
        await refreshTokens(user.uid);
      }
    }
  }, []);

  const SpotifyClient = createSpotifyClient(spotifyAccessToken);
  SpotifyClient.interceptors.request.use(async (config) => {
    const updatedConfig = config;
    if (!stateTokenIsValid) {
      const updatedAccessToken = await refreshTokens(user.uid);
      updatedConfig.headers.Authorization = `Bearer ${updatedAccessToken}`;
    } else {
      updatedConfig.headers.Authorization = `Bearer ${spotifyAccessToken}`;
    }
    return updatedConfig;
  });
  SpotifyClient.interceptors.response.use(undefined, async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        const updatedAccessToken = await refreshTokens(user.uid);
        const updatedConfig = error.config;
        updatedConfig.headers.Authorization = `Bearer ${updatedAccessToken}`;
        return axios.request(updatedConfig);
      }
    }
    return error;
  });

  const sideMenuSettingsOnClick = () => {
    setSideMenuVisible(!sideMenuVisible);
    navigate('/settings');
  };
  const sideMenuHomeOnClick = () => {
    setSideMenuVisible(!sideMenuVisible);
    navigate('/home');
  };

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
          signOutOnClick={signOutUser}
        />
      )}
      <main>
        <h1>{pageTitle}</h1>
        <Outlet
          context={[SpotifyClient]}
        />
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
};

InAppPage.defaultProps = {
  sideMenuOnClick: () => {},
  notificationsOnClick: () => {},
  hasNotification: false,
  pageTitle: 'In-app Page',
};

export default InAppPage;
