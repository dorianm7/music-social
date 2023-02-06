/**
 * Module containing functions to interface with backend server
 * @module users_spotify_artists
 */

import axios from 'axios';
import {
  usersSpotifyArtistsBaseEndpoint,
  USERS_SPOTIFY_ARTISTS_BACKEND_ENDPOINT,
} from './users_spotify_artists-helpers';

/**
 * Create users_spotify_artists document in database with given uid
 * @param {string} uid Id for the document
 * @returns {Promise<void>} Promise of a successful document creation
 */
const createUsersSpotifyArtists = (uid) => axios.post(
  USERS_SPOTIFY_ARTISTS_BACKEND_ENDPOINT,
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
const patchUsersSpotifyArtists = (uid, patchBody) => axios.patch(
  usersSpotifyArtistsBaseEndpoint(uid),
  patchBody,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export {
  createUsersSpotifyArtists,
  patchUsersSpotifyArtists,
};
