/**
 * Module containing functions to interface with backend server
 * @module spotify
 */

import axios from 'axios';
import { getRefreshTokenHref } from './spotify-helpers';

/**
 * Refreshes the Spotify tokens
 * @param {string} uid The user's uid
 */
const refreshTokens = async (uid) => {
  const refreshTokenEndpoint = getRefreshTokenHref(uid);
  const refreshTokenRes = await axios.post(refreshTokenEndpoint);
  localStorage.setItem('spotify_access_token', refreshTokenRes.data.access_token);
  localStorage.setItem('spotify_access_token_expires_in', refreshTokenRes.data.expires_in);
  localStorage.setItem('spotify_access_token_timestamp', Date.now());
};

export default refreshTokens;
