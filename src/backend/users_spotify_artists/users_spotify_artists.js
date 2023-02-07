/**
 * Module containing functions to interface with backend server
 * @module users_spotify_artists
 */

import axios from 'axios';
import USERS_SPOTIFY_ARTISTS_BACKEND_ENDPOINT from './users_spotify_artists-helpers';

const UsersSpotifyArtistsClient = axios.create({
  baseURL: USERS_SPOTIFY_ARTISTS_BACKEND_ENDPOINT,
});

/**
 * Object representing artist item found in users_spotify_artists document
 * @typedef {Object} UsersSpotifyArtistsItem
 * @property {string} spotify_api_href Link to spotify Web API endpoint
 * @property {string} spotify_href Link to Spotify url
 * @property {string} spotify_id Spotify id for artist
 * @property {string} img Link to artist image
 * @property {string} name Artist name
 */

/**
 * Create users_spotify_artists document in database with given uid
 * @param {string} uid Id for the document
 * @returns {Promise<void>} Promise of a successful document creation
 */
const createUsersSpotifyArtists = (uid) => UsersSpotifyArtistsClient.post(
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
const patchUsersSpotifyArtists = (uid, patchBody) => UsersSpotifyArtistsClient.patch(
  `/${uid}`,
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
