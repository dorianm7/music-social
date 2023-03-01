/**
 * Module containing functions to authorize / deauthorize spotify
 * @module spotify-auth
 */

import axios from 'axios';
import { patchUser } from '../users/users';
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

/**
 * Remove local and remote Spotify tokens
 * @param {string} uid Id of user to remove stored refresh token
 * @returns {Promise<void>} A promise of a successful patch
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
  return patchUser(uid, patchBody)
    .catch((err) => {
      if (err.response) {
        if (err.response.status > 499) {
          return Promise.reject(new Error('Internal error. Try again.'));
        }
        if (err.response.status === 400) {
          Promise.reject(new Error(err.response.data.title));
        }
        if (err.response.status === 404) {
          Promise.reject(new Error('Error. User not found'));
        }
      }
      if (err.request) {
        Promise.reject(new Error('Error from server. Try again.'));
      }
      return Promise.reject(new Error('Error. Try again.'));
    });
};

/**
 * Check if user has authorized Spotify
 * @returns {boolean} Whether user has authorized Spotify
 */
const isAuthorized = () => !!SPOTIFY_SESSION_STORAGE_VALUES.accessToken;

export {
  refreshTokens,
  getAccessToken,
  removeAccessToken,
  removeTokens,
  isAuthorized,
};
