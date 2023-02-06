/**
 * Module containing functions to interface with backend server
 * @module users_spotify_playlists
 */

import axios from 'axios';
import {
  USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT,
  usersSpotifyPlaylistsBaseEndpoint,
} from './users_spotify_playlists-helpers';

/**
 * Create users_spotify_playlists document in database with given uid
 * @param {string} uid Id for the document
 * @returns {Promise<void>} Promise of a successful document creation
 */
const createUsersSpotifyPlaylists = (uid) => axios.post(
  USERS_SPOTIFY_PLAYLISTS_BACKEND_ENDPOINT,
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
const patchUsersSpotifyPlaylists = (uid, patchBody) => axios.patch(
  usersSpotifyPlaylistsBaseEndpoint(uid),
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
