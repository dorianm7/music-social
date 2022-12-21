/**
 * Module containing functions to interface with backend server
 * @module spotify
 */

import axios from 'axios';
import {
  SPOTIFY_LOCAL_STORAGE_KEYS,
  getRefreshTokenHref,
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

export default refreshTokens;
