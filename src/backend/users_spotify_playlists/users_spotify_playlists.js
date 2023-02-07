/**
 * Module containing functions to interface with backend server
 * @module users_spotify_playlists
 */

import axios from 'axios';
import USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT from './users_spotify_playlists-helpers';

/**
 * Object representing playlist item found in users_spotify_playlists document
 * @typedef {Object} UsersSpotifyPlaylistsItem
 * @property {string} spotify_api_href Link to spotify Web API endpoint
 * @property {string} spotify_href Link to Spotify url
 * @property {string} spotify_id Spotify id for playlist
 * @property {string} img Link to playlist cover art
 * @property {string} name Playlist name
 * @property {string[]} creators List of creators of playlist
 */

const UsersSpotifyPlaylistsClient = axios.create({
  baseURL: USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT,
});

/**
 * Create users_spotify_playlists document in database with given uid
 * @param {string} uid Id for the document
 * @returns {Promise<void>} Promise of a successful document creation
 */
const createUsersSpotifyPlaylists = (uid) => UsersSpotifyPlaylistsClient.post(
  '/',
  {
    id: uid,
  },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

/**
 * Patch document in the database with given operations in patchBody
 * @param {string} uid Id of the document
 * @param {Object[]} patchBody Array of patch object operations
 * @returns {Promise<void>} Promise of a successful patch
 */
const patchUsersSpotifyPlaylists = (uid, patchBody) => UsersSpotifyPlaylistsClient.patch(
  `/${uid}`,
  patchBody,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export {
  createUsersSpotifyPlaylists,
  patchUsersSpotifyPlaylists,
};
