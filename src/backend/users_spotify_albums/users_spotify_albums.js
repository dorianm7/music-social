/**
 * Module containing functions to interface with backend server
 * @module users_spotify_albums
 */

import axios from 'axios';
import USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT from './users_spotify_albums-helpers';

const UsersSpotifyAlbumsClient = axios.create({
  baseURL: USERS_SPOTIFY_ALBUMS_BACKEND_ENDPOINT,
});

/**
 * Object representing album item found in users_spotify_albums document
 * @typedef {Object} UsersSpotifyAlbumsItem
 * @property {string} spotify_api_href Link to spotify Web API endpoint
 * @property {string} spotify_href Link to Spotify url
 * @property {string} spotify_id Spotify id for album
 * @property {string} img Link to album cover art
 * @property {string} name Album name
 * @property {string[]} artists List of artists on album
 */

/**
 * Create users_spotify_albums document in database with given uid
 * @param {string} uid Id for the document
 * @returns {Promise<void>} Promise of a successful document creation
 */
const createUsersSpotifyAlbums = (uid) => UsersSpotifyAlbumsClient.post(
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
const patchUsersSpotifyAlbums = (uid, patchBody) => UsersSpotifyAlbumsClient.patch(
  `/${uid}`,
  patchBody,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);

export {
  createUsersSpotifyAlbums,
  patchUsersSpotifyAlbums,
};
