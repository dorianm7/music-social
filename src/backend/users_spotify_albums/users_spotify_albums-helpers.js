/**
 * Module containing constants,functions to help working with users_spotify_albums
 * @module users_spotify_albums-helpers
 */

const USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT = `${process.env.REACT_APP_BACKEND_HTTP_SERVER}/users_spotify_albums`;

/**
 * Returns the backend endpoint of document with given uid
 * @param {string} uid Id of the document
 * @returns {string} Endpoint of the document
 */
const usersSpotifyAlbumsBaseEndpoint = (uid) => `${USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT}/${uid}`;

export {
  USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT,
  usersSpotifyAlbumsBaseEndpoint,
};
