/**
 * Module containing functions to interface with backend server
 * @module users_spotify_albums
 */

import axios from 'axios';
import USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT from './users_spotify_albums-helpers';

/**
 * Create users_spotify_albums document in database with given uid
 * @param {string} uid Id for the document
 * @returns {Promise<void>} Promise of a successful document creation
 */
const createUsersSpotifyAlbums = (uid) => axios.post(
  USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT,
  {
    id: uid,
  },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export default createUsersSpotifyAlbums;
