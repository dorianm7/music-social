/**
 * Module containing Spotify endpoints
 * @module spotify-endpoints
 */

const SPOTIFY_API_ENDPOINT = 'https://api.spotify.com/v1';
const CURRENT_USER_PROFILE_ROUTE = '/me';
const CURRENT_USER_PLAYLISTS_ROUTE = `${CURRENT_USER_PROFILE_ROUTE}/playlists`;
const CURRENT_USER_ALBUMS_ROUTE = `${CURRENT_USER_PROFILE_ROUTE}/albums`;
const CURRENT_USER_FOLLOWING_ROUTE = `${CURRENT_USER_PROFILE_ROUTE}/following`;

/**
 * Get query params for a limit cursor endpoint
 * @param {int} limit Amount of items to return
 * @param {string} after Id of last item Id returned from previous request
 * @returns {string} Query string containing limit,after
 */
const getLimitCursorQueryParams = (limit = 50, after = '') => {
  const afterSearchParam = after ? `&after=${after}` : '';
  return `limit=${limit}${afterSearchParam}`;
};

export {
  SPOTIFY_API_ENDPOINT,
  CURRENT_USER_PROFILE_ROUTE,
  CURRENT_USER_PLAYLISTS_ROUTE,
  CURRENT_USER_ALBUMS_ROUTE,
  CURRENT_USER_FOLLOWING_ROUTE,
  getLimitCursorQueryParams,
};
