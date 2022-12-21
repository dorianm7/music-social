/**
 * Module containing functions to help working with spotify
 * @module spotify-helpers
 */

const SPOTIFY_BACKEND_ENDPOINT = `${process.env.REACT_APP_BACKEND_HTTP_SERVER}/spotify`;

/**
 * Returns the backend spotify authorization endpoint
 * @param {string} uid The user's uid
 * @param {string} fromPath Path calling function from. Ex: /settings
 * @return {string} Backend endpoint to make request for Spotify authorization
 */
const getAuthorizeHref = (uid, fromPath) => {
  const queryObj = {
    uid,
    fromPath: encodeURIComponent(fromPath),
  };
  const queryString = new URLSearchParams(queryObj);
  return `${SPOTIFY_BACKEND_ENDPOINT}/authorize/?${queryString}`;
};

/**
 * Returns the backend spotify refresh token endpoint
 * @param {string} uid The user's uid
 * @returns {string} Backend endpoint to refresh tokens
 */
const getRefreshTokenHref = (uid) => {
  const queryObj = {
    uid,
  };
  const queryString = new URLSearchParams(queryObj);
  return `${SPOTIFY_BACKEND_ENDPOINT}/refresh_token/?${queryString}`;
};

/**
 * Checks if access token stored is valid
 * @returns {boolean} Access token validity
 */
const accessTokenValid = () => {
  const expiresIn = localStorage.getItem('expires_in');
  const timestamp = localStorage.getItem('timestamp');
  if (!expiresIn || !timestamp) {
    return false;
  }
  const timePassed = Date.now() - timestamp;
  return (timePassed / 1000) > expiresIn;
};

module.exports = {
  getAuthorizeHref,
  getRefreshTokenHref,
  accessTokenValid,
};
