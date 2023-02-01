/**
 * Module containing Spotify endpoints
 * @module spotify-endpoints
 */

const SPOTIFY_API_ENDPOINT = 'https://api.spotify.com/v1';
const CURRENT_USER_PROFILE_ENDPOINT = `${SPOTIFY_API_ENDPOINT}/me`;
const CURRENT_USER_PLAYLISTS_ENDPOINT = `${CURRENT_USER_PROFILE_ENDPOINT}/playlists`;
const CURRENT_USER_ALBUMS_ENDPOINT = `${CURRENT_USER_PROFILE_ENDPOINT}/albums`;
const CURRENT_USER_FOLLOWING_ENDPOINT = `${CURRENT_USER_PROFILE_ENDPOINT}/following`;

/**
 * Get Spotify endpoint that will return user's specified albums
 * @param {int} limit Amount of albums to return
 * @param {int} offset Index of first item to return
 * @returns {string} Spotify endpoint
 */
const getUsersAlbumsHref = (limit = 50, offset = 0) => `${CURRENT_USER_ALBUMS_ENDPOINT}?limit=${limit}&offset=${offset}`;

/**
 * Get Spotify endpoint that will return user's specified artists
 * @param {int} limit Amount of artists to return
 * @param {string} after Id of last artist Id returned from previous request
 * @returns {string} Spotify endpoint
 */
const getUsersArtistsHref = (limit = 50, after = '') => {
  const afterSearchParam = after ? `&after=${after}` : '';
  return `${CURRENT_USER_FOLLOWING_ENDPOINT}?type=artist&limit=${limit}${afterSearchParam}`;
};

/**
 * Get Spotify endpoint that will return user's specified playlists
 * @param {int} limit Amount of playlists to return
 * @param {int} offset Index of first item to return
 * @returns {string} Spotify endpoint
 */
const getUsersPlaylistsHref = (limit = 50, offset = 0) => `${CURRENT_USER_PLAYLISTS_ENDPOINT}?limit=${limit}&offset=${offset}`;

export {
  SPOTIFY_API_ENDPOINT,
  CURRENT_USER_ALBUMS_ENDPOINT,
  CURRENT_USER_FOLLOWING_ENDPOINT,
  CURRENT_USER_PLAYLISTS_ENDPOINT,
  CURRENT_USER_PROFILE_ENDPOINT,
  getUsersAlbumsHref,
  getUsersArtistsHref,
  getUsersPlaylistsHref,
};
