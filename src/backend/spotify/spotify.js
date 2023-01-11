/**
 * Module containing functions to interface with backend server
 * @module spotify
 */

import axios from 'axios';
import { patchUser } from '../user/user';
import {
  SPOTIFY_LOCAL_STORAGE_KEYS,
  SPOTIFY_LOCAL_STORAGE_VALUES,
  getRefreshTokenHref,
  accessTokenValid,
} from './spotify-helpers';

/**
 * Refreshes the Spotify tokens
 * @param {string} uid The user's uid
 */
const refreshTokens = async (uid) => {
  const refreshTokenEndpoint = getRefreshTokenHref(uid);
  const {
    accessToken,
    expiresIn,
    timestamp,
  } = SPOTIFY_LOCAL_STORAGE_KEYS;
  const refreshTokenRes = await axios.post(refreshTokenEndpoint);
  localStorage.setItem(accessToken, refreshTokenRes.data.access_token);
  localStorage.setItem(expiresIn, refreshTokenRes.data.expires_in);
  localStorage.setItem(timestamp, Date.now());
};

/**
 * Get the Spotify access token
 * @param {string} uid The user's uid
 * @returns The Spotify access token
 */
const getAccessToken = async (uid) => {
  if (!accessTokenValid()) {
    await refreshTokens(uid);
  }

  return SPOTIFY_LOCAL_STORAGE_VALUES.accessToken;
};

/**
 * Remove local Spotify access token values
 */
const removeAccessToken = () => {
  const {
    accessToken,
    expiresIn,
    timestamp,
  } = SPOTIFY_LOCAL_STORAGE_KEYS;
  localStorage.removeItem(accessToken);
  localStorage.removeItem(expiresIn);
  localStorage.removeItem(timestamp);
};

/**
 * Remove local and remote Spotify tokens
 * @param {string} uid Id of user to remove stored refresh token
 * @returns {Promise} A promise of a successful patch
 */
const removeTokens = (uid) => {
  removeAccessToken();
  const patchBody = [
    {
      op: 'replace',
      path: '/spotify_refresh_token',
      value: '',
    },
  ];
  return patchUser(uid, patchBody);
};

/**
 * Check if user has authorized Spotify
 * @returns {boolean} Whether user has authorized Spotify
 */
const isAuthorized = () => !!SPOTIFY_LOCAL_STORAGE_VALUES.accessToken;

export {
  refreshTokens,
  getAccessToken,
  removeTokens,
  isAuthorized,
};
