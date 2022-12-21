/**
 * Module containing functions to help working with spotify
 * @module spotify-helpers
 */

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
  return `${process.env.REACT_APP_BACKEND_HTTP_SERVER}/spotify/authorize/?${queryString}`;
};

export default getAuthorizeHref;
