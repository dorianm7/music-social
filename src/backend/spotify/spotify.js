/**
 * Module containing functions to interface with backend server
 * @module spotify
 */

import axios from 'axios';
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
 * Check if user has authorized Spotify
 * @returns {boolean} Whether user has authorized Spotify
 */
const isAuthorized = () => !!SPOTIFY_LOCAL_STORAGE_VALUES.accessToken;

export {
  refreshTokens,
  getAccessToken,
  isAuthorized,
};
