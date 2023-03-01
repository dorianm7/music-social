/**
 * Module containing functions to authorize / deauthorize spotify
 * @module spotify-auth
 */

import axios from 'axios';
import {
  SPOTIFY_SESSION_STORAGE_KEYS,
  SPOTIFY_SESSION_STORAGE_VALUES,
  getRefreshTokenHref,
  accessTokenValid,
} from './spotify-auth-helpers';

/**
 * Refreshes the Spotify tokens
 * @param {string} uid The user's uid
 * @returns {string} Updated access token
 */
const refreshTokens = async (uid) => {
  const refreshTokenEndpoint = getRefreshTokenHref(uid);
  const {
    accessToken,
    expiresIn,
    timestamp,
  } = SPOTIFY_SESSION_STORAGE_KEYS;
  const refreshTokenRes = await axios.get(refreshTokenEndpoint);
  const newAccessToken = refreshTokenRes.data.access_token;
  sessionStorage.setItem(accessToken, newAccessToken);
  sessionStorage.setItem(expiresIn, refreshTokenRes.data.expires_in);
  sessionStorage.setItem(timestamp, Date.now());
  return newAccessToken;
};

/**
 * Get the Spotify access token
 * @param {string} uid The user's uid
 * @returns {string} The Spotify access token
 */
const getAccessToken = async (uid) => {
  if (!accessTokenValid()) {
    return refreshTokens(uid);
  }

  return SPOTIFY_SESSION_STORAGE_VALUES.accessToken;
};

/**
 * Remove local Spotify access token values
 */
const removeAccessToken = () => {
  const {
    accessToken,
    expiresIn,
    timestamp,
  } = SPOTIFY_SESSION_STORAGE_KEYS;
  sessionStorage.removeItem(accessToken);
  sessionStorage.removeItem(expiresIn);
  sessionStorage.removeItem(timestamp);
};

export {
  refreshTokens,
  getAccessToken,
  removeAccessToken,
};
