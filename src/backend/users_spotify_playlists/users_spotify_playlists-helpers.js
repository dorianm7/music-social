/**
 * Module containing constants,functions to help working with users_spotify_playlists
 * @module users_spotify_playlists-helpers
 */

const USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT = `${process.env.REACT_APP_BACKEND_HTTP_SERVER}/users_spotify_playlists`;

/**
 * Returns the backend endpoint of document with given uid
 * @param {string} uid Id of the document
 * @returns {string} Endpoint of the document
 */
const usersSpotifyPlaylistsBaseEndpoint = (uid) => `${USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT}/${uid}`;

export {
  USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT,
  usersSpotifyPlaylistsBaseEndpoint,
};
